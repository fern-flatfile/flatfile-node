/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Flatfile } from "@flatfile/api-beta";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Records {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Records {
    constructor(private readonly options: Records.Options) {}

    /**
     * Returns records from a sheet in a workbook
     */
    public async get(
        sheetId: Flatfile.SheetId,
        request: Flatfile.GetRecordsRequest = {}
    ): Promise<Flatfile.RecordsResponse> {
        const {
            versionId,
            sortField,
            sortDirection,
            filter,
            filterField,
            searchValue,
            searchField,
            includeLinks,
            pageSize,
            pageNumber,
            includeCounts,
        } = request;
        const _queryParams = new URLSearchParams();
        if (versionId != null) {
            _queryParams.append("versionId", versionId);
        }

        if (sortField != null) {
            _queryParams.append("sortField", sortField);
        }

        if (sortDirection != null) {
            _queryParams.append("sortDirection", sortDirection);
        }

        if (filter != null) {
            _queryParams.append("filter", filter);
        }

        if (filterField != null) {
            _queryParams.append("filterField", filterField);
        }

        if (searchValue != null) {
            _queryParams.append("searchValue", searchValue);
        }

        if (searchField != null) {
            _queryParams.append("searchField", searchField);
        }

        if (includeLinks != null) {
            _queryParams.append("includeLinks", includeLinks.toString());
        }

        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        if (includeCounts != null) {
            _queryParams.append("includeCounts", includeCounts.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/records`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body, {
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
     * Updates existing records in a workbook sheet
     */
    public async update(
        sheetId: Flatfile.SheetId,
        request: Flatfile.UpdateRecordsRequest
    ): Promise<Flatfile.RecordsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/records`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.UpdateRecordsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body, {
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
     * Adds records to a workbook sheet
     */
    public async insert(sheetId: Flatfile.SheetId, request: Flatfile.RecordData[]): Promise<Flatfile.RecordsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/records`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.records.insert.Request.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body, {
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
     * Deletes records from a workbook sheet
     */
    public async delete(
        sheetId: Flatfile.SheetId,
        request: Flatfile.DeleteRecordsRequest = {}
    ): Promise<Flatfile.Success> {
        const { ids } = request;
        const _queryParams = new URLSearchParams();
        if (ids != null) {
            if (Array.isArray(ids)) {
                for (const _item of ids) {
                    _queryParams.append("ids", _item);
                }
            } else {
                _queryParams.append("ids", ids);
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/records`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
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
     * Searches for the given value in a field and returns the records that match the search criteria
     */
    public async find(
        sheetId: Flatfile.SheetId,
        request: Flatfile.FindRecordsRequest
    ): Promise<Flatfile.RecordsResponse> {
        const { fieldKey, searchValue, pageSize, pageNumber } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("fieldKey", fieldKey);
        _queryParams.append("searchValue", searchValue);
        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/find`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body, {
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
     * Searches for the given searchValue in a field and replaces all instances of that value with replaceValue
     */
    public async findAndReplace(
        sheetId: Flatfile.SheetId,
        sheetId: Flatfile.SheetId,
        request: Flatfile.FindAndReplaceRecordRequest
    ): Promise<Flatfile.RecordsResponse> {
        const { fieldKey, searchValue, pageSize, pageNumber, ..._body } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("fieldKey", fieldKey);
        _queryParams.append("searchValue", searchValue);
        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/sheets/${await serializers.SheetId.jsonOrThrow(sheetId)}/${await serializers.SheetId.jsonOrThrow(
                    sheetId
                )}/replace`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.FindAndReplaceRecordRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.RecordsResponse.parseOrThrow(_response.body, {
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

    private async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
