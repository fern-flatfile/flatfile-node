/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Flatfile } from "@fern-api/flatfile";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    public async list(request: Flatfile.ListJobsRequest = {}): Promise<Flatfile.ListJobsResponse> {
        const { environmentId, spaceId, workbookId, fileId } = request;
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

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.FlatfileEnvironment.Production, "/jobs"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.ListJobsResponse.parseOrThrow(_response.body as serializers.ListJobsResponse.Raw, {
                allowUnknownKeys: true,
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

    public async create(request: Flatfile.JobConfig): Promise<Flatfile.Job> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.FlatfileEnvironment.Production, "/jobs"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.JobConfig.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Job.parseOrThrow(_response.body as serializers.Job.Raw, {
                allowUnknownKeys: true,
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

    public async get(jobId: Flatfile.JobId): Promise<Flatfile.Job> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/jobs/${await serializers.JobId.jsonOrThrow(jobId)}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Job.parseOrThrow(_response.body as serializers.Job.Raw, {
                allowUnknownKeys: true,
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
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Success.parseOrThrow(_response.body as serializers.Success.Raw, {
                allowUnknownKeys: true,
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
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Success.parseOrThrow(_response.body as serializers.Success.Raw, {
                allowUnknownKeys: true,
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
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.JobPlan.parseOrThrow(_response.body as serializers.JobPlan.Raw, {
                allowUnknownKeys: true,
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
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.JobExecutionPlanConfig.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.JobPlan.parseOrThrow(_response.body as serializers.JobPlan.Raw, {
                allowUnknownKeys: true,
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
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.JobExecutionPlanConfig.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.JobPlan.parseOrThrow(_response.body as serializers.JobPlan.Raw, {
                allowUnknownKeys: true,
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
}
