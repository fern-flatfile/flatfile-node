/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flatfile from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Versions {
    interface Options {
        environment?: core.Supplier<environments.FlatfileEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
        streamingFetcher?: core.StreamingFetchFunction;
    }
}

export class Versions {
    constructor(protected readonly options: Versions.Options) {}

    /**
     * Creates a new version id that can be used to group record updates
     */
    public async createId(request: Flatfile.VersionsPostRequestBody = {}): Promise<Flatfile.VersionResponse> {
        const _response = await (this.options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.FlatfileEnvironment.Production,
                "/versions"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Disable-Hooks": "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@flatfile/api",
                "X-Fern-SDK-Version": "1.5.8",
            },
            contentType: "application/json",
            body: await serializers.VersionsPostRequestBody.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.VersionResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this.options.token)}`;
    }
}
