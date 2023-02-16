/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { Flatfile } from "@fern-api/flatfile";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Returns all space configs for an account
     * @throws {Flatfile.BadRequestError}
     */
    public async list(
        request: Flatfile.spaces.ListSpaceConfigsRequest = {}
    ): Promise<Flatfile.spaces.ListSpaceConfigsResponse> {
        const { environmentId } = request;
        const _queryParams = new URLSearchParams();
        if (environmentId != null) {
            _queryParams.append("environmentId", environmentId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.FlatfileEnvironment.Production, "/spaces/configs"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.spaces.ListSpaceConfigsResponse.parseOrThrow(
                _response.body as serializers.spaces.ListSpaceConfigsResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parse(_response.error.body as serializers.BadRequestError.Raw)
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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

    /**
     * Replaces an existing Space Config and optionally migrates all spaces using the config
     * @throws {Flatfile.BadRequestError}
     */
    public async replace(
        request: Flatfile.spaces.ReplaceSpaceConfigRequest
    ): Promise<Flatfile.spaces.SpacePatternResponse> {
        const { migrate, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (migrate != null) {
            _queryParams.append("migrate", migrate.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.FlatfileEnvironment.Production, "/spaces/configs"),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
            body: await serializers.spaces.SpacePatternConfig.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return await serializers.spaces.SpacePatternResponse.parseOrThrow(
                _response.body as serializers.spaces.SpacePatternResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parse(_response.error.body as serializers.BadRequestError.Raw)
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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

    /**
     * Creates a new Space Config
     * @throws {Flatfile.BadRequestError}
     */
    public async create(request: Flatfile.spaces.SpacePatternConfig): Promise<Flatfile.spaces.SpacePatternResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.FlatfileEnvironment.Production, "/spaces/configs"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.spaces.SpacePatternConfig.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.spaces.SpacePatternResponse.parseOrThrow(
                _response.body as serializers.spaces.SpacePatternResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parse(_response.error.body as serializers.BadRequestError.Raw)
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
}
