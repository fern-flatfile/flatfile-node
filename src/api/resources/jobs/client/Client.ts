/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Flatfile } from "@flatfile/api-beta";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Jobs {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Jobs {
    constructor(protected readonly options: Jobs.Options) {}

    public async list(request: Flatfile.ListJobsRequest = {}): Promise<Flatfile.ListJobsResponse> {
        const { environmentId, spaceId, workbookId, fileId, pageSize, pageNumber, sortDirection } = request;
        const _queryParams = new URLSearchParams();
        if (environmentId != null) {
            _queryParams.append("environmentId", environmentId);
        }

        if (spaceId != null) {
            _queryParams.append("spaceId", spaceId);
        }

        if (workbookId != null) {
            _queryParams.append("workbookId", workbookId);
        }

        if (fileId != null) {
            _queryParams.append("fileId", fileId);
        }

        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        if (sortDirection != null) {
            _queryParams.append("sortDirection", sortDirection);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.FlatfileEnvironment.Production, "/jobs"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.ListJobsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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

    public async create(request: Flatfile.JobConfig): Promise<Flatfile.JobResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.FlatfileEnvironment.Production, "/jobs"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.JobConfig.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.JobResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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

    public async get(jobId: Flatfile.JobId): Promise<Flatfile.JobResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/jobs/${await serializers.JobId.jsonOrThrow(jobId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.JobResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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

    public async update(jobId: Flatfile.JobId, request: Flatfile.JobUpdate): Promise<Flatfile.JobResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/jobs/${await serializers.JobId.jsonOrThrow(jobId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.JobUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.JobResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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

    public async delete(jobId: Flatfile.JobId): Promise<Flatfile.Success> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/jobs/${await serializers.JobId.jsonOrThrow(jobId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.Success.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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

    /**
     * Execute a job and return the job
     */
    public async execute(jobId: string): Promise<Flatfile.Success> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/jobs/${jobId}/execute`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.Success.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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

    /**
     * Returns a single job's execution plan
     */
    public async getExecutionPlan(jobId: Flatfile.JobId): Promise<Flatfile.JobPlan> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/jobs/${await serializers.JobId.jsonOrThrow(jobId)}/plan`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.JobPlan.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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

    /**
     * Update a job's entire execution plan
     */
    public async updateExecutionPlan(
        jobId: Flatfile.JobId,
        request: Flatfile.JobExecutionPlanConfig
    ): Promise<Flatfile.JobPlan> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/jobs/${await serializers.JobId.jsonOrThrow(jobId)}/plan`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.JobExecutionPlanConfig.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.JobPlan.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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

    /**
     * Update a one or more individual fields on a job's execution plan
     */
    public async updateExecutionPlanFields(
        jobId: string,
        request: Flatfile.JobExecutionPlanConfig
    ): Promise<Flatfile.JobPlan> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/jobs/${jobId}/plan`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.JobExecutionPlanConfig.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.JobPlan.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
