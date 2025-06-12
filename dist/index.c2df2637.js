
      var $parcel$global = globalThis;
    
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire893f"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire893f"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("lYtBd", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "fetch", () => $fff62960f0abe78c$export$e7aa7bc5c1b3cfb3);
$parcel$export(module.exports, "default", () => $fff62960f0abe78c$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Headers", () => $fff62960f0abe78c$export$79b704688b15c0f4);
$parcel$export(module.exports, "Request", () => $fff62960f0abe78c$export$7fa6c5b6f8193917);
$parcel$export(module.exports, "Response", () => $fff62960f0abe78c$export$9f633d56d7ec90d3);
"use strict";
// ref: https://github.com/tc39/proposal-global
var $fff62960f0abe78c$var$getGlobal = function() {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof $parcel$global !== "undefined") return $parcel$global;
    throw new Error("unable to locate global object");
};
var $fff62960f0abe78c$var$globalObject = $fff62960f0abe78c$var$getGlobal();
const $fff62960f0abe78c$export$e7aa7bc5c1b3cfb3 = $fff62960f0abe78c$var$globalObject.fetch;
var $fff62960f0abe78c$export$2e2bcd8739ae039 = $fff62960f0abe78c$var$globalObject.fetch.bind($fff62960f0abe78c$var$globalObject);
const $fff62960f0abe78c$export$79b704688b15c0f4 = $fff62960f0abe78c$var$globalObject.Headers;
const $fff62960f0abe78c$export$7fa6c5b6f8193917 = $fff62960f0abe78c$var$globalObject.Request;
const $fff62960f0abe78c$export$9f633d56d7ec90d3 = $fff62960f0abe78c$var$globalObject.Response;

});

parcelRegister("9EYTn", function(module, exports) {

var $92x9i = parcelRequire("92x9i");
module.exports = $92x9i("iaFPC").then(()=>parcelRequire("eJI70"));

});
parcelRegister("92x9i", function(module, exports) {
"use strict";

function $694e03a97467efc7$var$load(id) {
    // eslint-disable-next-line no-undef
    return import((parcelRequire("aKzDW")).resolve(id));
}
module.exports = $694e03a97467efc7$var$load;

});



const $5a9f0b04aae135fe$export$98d92b1aa79f8cc7 = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>Promise.resolve((parcelRequire("lYtBd"))).then(({ default: fetch1 })=>fetch1(...args));
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};


class $e2098b17f8741c08$export$738689d52335bb3c extends Error {
    constructor(message, name = "FunctionsError", context){
        super(message);
        this.name = name;
        this.context = context;
    }
}
class $e2098b17f8741c08$export$14f2b6540d498ce extends $e2098b17f8741c08$export$738689d52335bb3c {
    constructor(context){
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", context);
    }
}
class $e2098b17f8741c08$export$d08a45df86040161 extends $e2098b17f8741c08$export$738689d52335bb3c {
    constructor(context){
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", context);
    }
}
class $e2098b17f8741c08$export$761f8c0e0fa4624f extends $e2098b17f8741c08$export$738689d52335bb3c {
    constructor(context){
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", context);
    }
}


var $21ec0e6ed76bbabb$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class $21ec0e6ed76bbabb$export$1d0b400bf8a0fa55 {
    constructor(url, { headers: headers = {}, customFetch: customFetch } = {}){
        this.url = url;
        this.headers = headers;
        this.fetch = (0, $5a9f0b04aae135fe$export$98d92b1aa79f8cc7)(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     */ setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     */ invoke(functionName, options = {}) {
        var _a;
        return $21ec0e6ed76bbabb$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const { headers: headers, method: method, body: functionArgs } = options;
                let _headers = {};
                let body;
                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, "Content-Type") || !headers)) {
                    if (typeof Blob !== "undefined" && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
                        // will work for File as File inherits Blob
                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                        _headers["Content-Type"] = "application/octet-stream";
                        body = functionArgs;
                    } else if (typeof functionArgs === "string") {
                        // plain string
                        _headers["Content-Type"] = "text/plain";
                        body = functionArgs;
                    } else if (typeof FormData !== "undefined" && functionArgs instanceof FormData) // don't set content-type headers
                    // Request will automatically add the right boundary value
                    body = functionArgs;
                    else {
                        // default, assume this is JSON
                        _headers["Content-Type"] = "application/json";
                        body = JSON.stringify(functionArgs);
                    }
                }
                const response = yield this.fetch(`${this.url}/${functionName}`, {
                    method: method || "POST",
                    // headers priority is (high to low):
                    // 1. invoke-level headers
                    // 2. client-level headers
                    // 3. default Content-Type header
                    headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                    body: body
                }).catch((fetchError)=>{
                    throw new (0, $e2098b17f8741c08$export$14f2b6540d498ce)(fetchError);
                });
                const isRelayError = response.headers.get("x-relay-error");
                if (isRelayError && isRelayError === "true") throw new (0, $e2098b17f8741c08$export$d08a45df86040161)(response);
                if (!response.ok) throw new (0, $e2098b17f8741c08$export$761f8c0e0fa4624f)(response);
                let responseType = ((_a = response.headers.get("Content-Type")) !== null && _a !== void 0 ? _a : "text/plain").split(";")[0].trim();
                let data;
                if (responseType === "application/json") data = yield response.json();
                else if (responseType === "application/octet-stream") data = yield response.blob();
                else if (responseType === "multipart/form-data") data = yield response.formData();
                else // default to text
                data = yield response.text();
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error: error
                };
            }
        });
    }
}


// @ts-ignore

var $lYtBd = parcelRequire("lYtBd");
class $ac48e64a2bdeedf8$export$2e2bcd8739ae039 extends Error {
    constructor(context){
        super(context.message);
        this.name = "PostgrestError";
        this.details = context.details;
        this.hint = context.hint;
        this.code = context.code;
    }
}


class $9587781d6126ef26$export$2e2bcd8739ae039 {
    constructor(builder){
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = builder.headers;
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = builder.shouldThrowOnError;
        this.signal = builder.signal;
        this.isMaybeSingle = builder.isMaybeSingle;
        if (builder.fetch) this.fetch = builder.fetch;
        else if (typeof fetch === "undefined") this.fetch = (0, $lYtBd.default);
        else this.fetch = fetch;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (this.schema === undefined) ;
        else if ([
            "GET",
            "HEAD"
        ].includes(this.method)) this.headers["Accept-Profile"] = this.schema;
        else this.headers["Content-Profile"] = this.schema;
        if (this.method !== "GET" && this.method !== "HEAD") this.headers["Content-Type"] = "application/json";
        // NOTE: Invoke w/o `this` to avoid illegal invocation error.
        // https://github.com/supabase/postgrest-js/pull/247
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async (res)=>{
            var _a, _b, _c;
            let error = null;
            let data = null;
            let count = null;
            let status = res.status;
            let statusText = res.statusText;
            if (res.ok) {
                if (this.method !== "HEAD") {
                    const body = await res.text();
                    if (body === "") ;
                    else if (this.headers["Accept"] === "text/csv") data = body;
                    else if (this.headers["Accept"] && this.headers["Accept"].includes("application/vnd.pgrst.plan+text")) data = body;
                    else data = JSON.parse(body);
                }
                const countHeader = (_a = this.headers["Prefer"]) === null || _a === void 0 ? void 0 : _a.match(/count=(exact|planned|estimated)/);
                const contentRange = (_b = res.headers.get("content-range")) === null || _b === void 0 ? void 0 : _b.split("/");
                if (countHeader && contentRange && contentRange.length > 1) count = parseInt(contentRange[1]);
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === "GET" && Array.isArray(data)) {
                    if (data.length > 1) {
                        error = {
                            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                            code: "PGRST116",
                            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: "JSON object requested, multiple (or no) rows returned"
                        };
                        data = null;
                        count = null;
                        status = 406;
                        statusText = "Not Acceptable";
                    } else if (data.length === 1) data = data[0];
                    else data = null;
                }
            } else {
                const body = await res.text();
                try {
                    error = JSON.parse(body);
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (Array.isArray(error) && res.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = "OK";
                    }
                } catch (_d) {
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (res.status === 404 && body === "") {
                        status = 204;
                        statusText = "No Content";
                    } else error = {
                        message: body
                    };
                }
                if (error && this.isMaybeSingle && ((_c = error === null || error === void 0 ? void 0 : error.details) === null || _c === void 0 ? void 0 : _c.includes("0 rows"))) {
                    error = null;
                    status = 200;
                    statusText = "OK";
                }
                if (error && this.shouldThrowOnError) throw new (0, $ac48e64a2bdeedf8$export$2e2bcd8739ae039)(error);
            }
            const postgrestResponse = {
                error: error,
                data: data,
                count: count,
                status: status,
                statusText: statusText
            };
            return postgrestResponse;
        });
        if (!this.shouldThrowOnError) res = res.catch((fetchError)=>{
            var _a, _b, _c;
            return {
                error: {
                    message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                    details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ""}`,
                    hint: "",
                    code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            };
        });
        return res.then(onfulfilled, onrejected);
    }
}


class $deb7c24c7343e402$export$2e2bcd8739ae039 extends (0, $9587781d6126ef26$export$2e2bcd8739ae039) {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */ select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c)=>{
            if (/\s/.test(c) && !quoted) return "";
            if (c === '"') quoted = !quoted;
            return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        if (this.headers["Prefer"]) this.headers["Prefer"] += ",";
        this.headers["Prefer"] += "return=representation";
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ order(column, { ascending: ascending = true, nullsFirst: nullsFirst, foreignTable: foreignTable, referencedTable: referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.order` : "order";
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === undefined ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ limit(count, { foreignTable: foreignTable, referencedTable: referencedTable = foreignTable } = {}) {
        const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by starting at an offset (`from`) and ending at the offset (`from + to`).
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ range(from, to, { foreignTable: foreignTable, referencedTable: referencedTable = foreignTable } = {}) {
        const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
        const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */ single() {
        this.headers["Accept"] = "application/vnd.pgrst.object+json";
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */ maybeSingle() {
        // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
        // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
        if (this.method === "GET") this.headers["Accept"] = "application/json";
        else this.headers["Accept"] = "application/vnd.pgrst.object+json";
        this.isMaybeSingle = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */ csv() {
        this.headers["Accept"] = "text/csv";
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */ geojson() {
        this.headers["Accept"] = "application/geo+json";
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */ explain({ analyze: analyze = false, verbose: verbose = false, settings: settings = false, buffers: buffers = false, wal: wal = false, format: format = "text" } = {}) {
        var _a;
        const options = [
            analyze ? "analyze" : null,
            verbose ? "verbose" : null,
            settings ? "settings" : null,
            buffers ? "buffers" : null,
            wal ? "wal" : null
        ].filter(Boolean).join("|");
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = (_a = this.headers["Accept"]) !== null && _a !== void 0 ? _a : "application/json";
        this.headers["Accept"] = `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`;
        if (format === "json") return this;
        else return this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */ rollback() {
        var _a;
        if (((_a = this.headers["Prefer"]) !== null && _a !== void 0 ? _a : "").trim().length > 0) this.headers["Prefer"] += ",tx=rollback";
        else this.headers["Prefer"] = "tx=rollback";
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     */ returns() {
        return this;
    }
}


class $f62c3f89661e1893$export$2e2bcd8739ae039 extends (0, $deb7c24c7343e402$export$2e2bcd8739ae039) {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */ in(column, values) {
        const cleanedValues = values.map((s)=>{
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === "string" && new RegExp("[,()]").test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(",");
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ contains(column, value) {
        if (typeof value === "string") // range types can be inclusive '[', ']' or exclusive '(', ')' so just
        // keep it simple and accept a string
        this.url.searchParams.append(column, `cs.${value}`);
        else if (Array.isArray(value)) // array
        this.url.searchParams.append(column, `cs.{${value.join(",")}}`);
        else // json
        this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ containedBy(column, value) {
        if (typeof value === "string") // range
        this.url.searchParams.append(column, `cd.${value}`);
        else if (Array.isArray(value)) // array
        this.url.searchParams.append(column, `cd.{${value.join(",")}}`);
        else // json
        this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */ overlaps(column, value) {
        if (typeof value === "string") // range
        this.url.searchParams.append(column, `ov.${value}`);
        else // array
        this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
        return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */ textSearch(column, query, { config: config, type: type } = {}) {
        let typePart = "";
        if (type === "plain") typePart = "pl";
        else if (type === "phrase") typePart = "ph";
        else if (type === "websearch") typePart = "w";
        const configPart = config === undefined ? "" : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */ match(query) {
        Object.entries(query).forEach(([column, value])=>{
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */ or(filters, { foreignTable: foreignTable, referencedTable: referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.or` : "or";
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
}


class $50e6de0a9eb78045$export$2e2bcd8739ae039 {
    constructor(url, { headers: headers = {}, schema: schema, fetch: fetch }){
        this.url = url;
        this.headers = headers;
        this.schema = schema;
        this.fetch = fetch;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ select(columns, { head: head = false, count: count } = {}) {
        const method = head ? "HEAD" : "GET";
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c)=>{
            if (/\s/.test(c) && !quoted) return "";
            if (c === '"') quoted = !quoted;
            return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        if (count) this.headers["Prefer"] = `count=${count}`;
        return new (0, $f62c3f89661e1893$export$2e2bcd8739ae039)({
            method: method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */ insert(values, { count: count, defaultToNull: defaultToNull = true } = {}) {
        const method = "POST";
        const prefersHeaders = [];
        if (this.headers["Prefer"]) prefersHeaders.push(this.headers["Prefer"]);
        if (count) prefersHeaders.push(`count=${count}`);
        if (!defaultToNull) prefersHeaders.push("missing=default");
        this.headers["Prefer"] = prefersHeaders.join(",");
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set("columns", uniqueColumns.join(","));
            }
        }
        return new (0, $f62c3f89661e1893$export$2e2bcd8739ae039)({
            method: method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */ upsert(values, { onConflict: onConflict, ignoreDuplicates: ignoreDuplicates = false, count: count, defaultToNull: defaultToNull = true } = {}) {
        const method = "POST";
        const prefersHeaders = [
            `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`
        ];
        if (onConflict !== undefined) this.url.searchParams.set("on_conflict", onConflict);
        if (this.headers["Prefer"]) prefersHeaders.push(this.headers["Prefer"]);
        if (count) prefersHeaders.push(`count=${count}`);
        if (!defaultToNull) prefersHeaders.push("missing=default");
        this.headers["Prefer"] = prefersHeaders.join(",");
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set("columns", uniqueColumns.join(","));
            }
        }
        return new (0, $f62c3f89661e1893$export$2e2bcd8739ae039)({
            method: method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ update(values, { count: count } = {}) {
        const method = "PATCH";
        const prefersHeaders = [];
        if (this.headers["Prefer"]) prefersHeaders.push(this.headers["Prefer"]);
        if (count) prefersHeaders.push(`count=${count}`);
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new (0, $f62c3f89661e1893$export$2e2bcd8739ae039)({
            method: method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ delete({ count: count } = {}) {
        const method = "DELETE";
        const prefersHeaders = [];
        if (count) prefersHeaders.push(`count=${count}`);
        if (this.headers["Prefer"]) prefersHeaders.unshift(this.headers["Prefer"]);
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new (0, $f62c3f89661e1893$export$2e2bcd8739ae039)({
            method: method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
}



const $1d6cbd3f0f72ca36$export$83d89fbfd8236492 = "1.9.2";


const $3f36da1301f0918a$export$88a84136db6a4b64 = {
    "X-Client-Info": `postgrest-js/${(0, $1d6cbd3f0f72ca36$export$83d89fbfd8236492)}`
};


class $d9a060a71a7eddb8$export$2e2bcd8739ae039 {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */ constructor(url, { headers: headers = {}, schema: schema, fetch: fetch } = {}){
        this.url = url;
        this.headers = Object.assign(Object.assign({}, (0, $3f36da1301f0918a$export$88a84136db6a4b64)), headers);
        this.schemaName = schema;
        this.fetch = fetch;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        const url = new URL(`${this.url}/${relation}`);
        return new (0, $50e6de0a9eb78045$export$2e2bcd8739ae039)(url, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return new $d9a060a71a7eddb8$export$2e2bcd8739ae039(this.url, {
            headers: this.headers,
            schema: schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, { head: head = false, count: count } = {}) {
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        if (head) {
            method = "HEAD";
            Object.entries(args).forEach(([name, value])=>{
                url.searchParams.append(name, `${value}`);
            });
        } else {
            method = "POST";
            body = args;
        }
        const headers = Object.assign({}, this.headers);
        if (count) headers["Prefer"] = `count=${count}`;
        return new (0, $f62c3f89661e1893$export$2e2bcd8739ae039)({
            method: method,
            url: url,
            headers: headers,
            schema: this.schemaName,
            body: body,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
}








const $074e850208cd127d$export$83d89fbfd8236492 = "2.9.3";


const $853d1ad37d604b1f$export$88a84136db6a4b64 = {
    "X-Client-Info": `realtime-js/${(0, $074e850208cd127d$export$83d89fbfd8236492)}`
};
const $853d1ad37d604b1f$export$df3f558bb9a9c991 = "1.0.0";
const $853d1ad37d604b1f$export$7bd623b29ec8e1eb = 10000;
const $853d1ad37d604b1f$export$5e80cf62e56a877b = 1000;
var $853d1ad37d604b1f$export$a6d0320a1563d49e;
(function(SOCKET_STATES) {
    SOCKET_STATES[SOCKET_STATES["connecting"] = 0] = "connecting";
    SOCKET_STATES[SOCKET_STATES["open"] = 1] = "open";
    SOCKET_STATES[SOCKET_STATES["closing"] = 2] = "closing";
    SOCKET_STATES[SOCKET_STATES["closed"] = 3] = "closed";
})($853d1ad37d604b1f$export$a6d0320a1563d49e || ($853d1ad37d604b1f$export$a6d0320a1563d49e = {}));
var $853d1ad37d604b1f$export$b83816118db74fe7;
(function(CHANNEL_STATES) {
    CHANNEL_STATES["closed"] = "closed";
    CHANNEL_STATES["errored"] = "errored";
    CHANNEL_STATES["joined"] = "joined";
    CHANNEL_STATES["joining"] = "joining";
    CHANNEL_STATES["leaving"] = "leaving";
})($853d1ad37d604b1f$export$b83816118db74fe7 || ($853d1ad37d604b1f$export$b83816118db74fe7 = {}));
var $853d1ad37d604b1f$export$8db7548e65d6ea55;
(function(CHANNEL_EVENTS) {
    CHANNEL_EVENTS["close"] = "phx_close";
    CHANNEL_EVENTS["error"] = "phx_error";
    CHANNEL_EVENTS["join"] = "phx_join";
    CHANNEL_EVENTS["reply"] = "phx_reply";
    CHANNEL_EVENTS["leave"] = "phx_leave";
    CHANNEL_EVENTS["access_token"] = "access_token";
})($853d1ad37d604b1f$export$8db7548e65d6ea55 || ($853d1ad37d604b1f$export$8db7548e65d6ea55 = {}));
var $853d1ad37d604b1f$export$b2688bfb999f5751;
(function(TRANSPORTS) {
    TRANSPORTS["websocket"] = "websocket";
})($853d1ad37d604b1f$export$b2688bfb999f5751 || ($853d1ad37d604b1f$export$b2688bfb999f5751 = {}));
var $853d1ad37d604b1f$export$deda39003d27273;
(function(CONNECTION_STATE) {
    CONNECTION_STATE["Connecting"] = "connecting";
    CONNECTION_STATE["Open"] = "open";
    CONNECTION_STATE["Closing"] = "closing";
    CONNECTION_STATE["Closed"] = "closed";
})($853d1ad37d604b1f$export$deda39003d27273 || ($853d1ad37d604b1f$export$deda39003d27273 = {}));


/**
 * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
 *
 * @example
 *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
 *      return [1000, 5000, 10000][tries - 1] || 10000
 *    })
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 *    reconnectTimer.scheduleTimeout() // fires after 5000
 *    reconnectTimer.reset()
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 */ class $23c4e887bda29cc5$export$2e2bcd8739ae039 {
    constructor(callback, timerCalc){
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = undefined;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
    }
    reset() {
        this.tries = 0;
        clearTimeout(this.timer);
    }
    // Cancels any previous scheduleTimeout and schedules callback
    scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.tries = this.tries + 1;
            this.callback();
        }, this.timerCalc(this.tries + 1));
    }
}


// This file draws heavily from https://github.com/phoenixframework/phoenix/commit/cf098e9cf7a44ee6479d31d911a97d3c7430c6fe
// License: https://github.com/phoenixframework/phoenix/blob/master/LICENSE.md
class $d73bd1204d5040e7$export$2e2bcd8739ae039 {
    constructor(){
        this.HEADER_LENGTH = 1;
    }
    decode(rawPayload, callback) {
        if (rawPayload.constructor === ArrayBuffer) return callback(this._binaryDecode(rawPayload));
        if (typeof rawPayload === "string") return callback(JSON.parse(rawPayload));
        return callback({});
    }
    _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const decoder = new TextDecoder();
        return this._decodeBroadcast(buffer, view, decoder);
    }
    _decodeBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const eventSize = view.getUint8(2);
        let offset = this.HEADER_LENGTH + 2;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const event = decoder.decode(buffer.slice(offset, offset + eventSize));
        offset = offset + eventSize;
        const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
        return {
            ref: null,
            topic: topic,
            event: event,
            payload: data
        };
    }
}




class $81eb9012471dfe15$export$2e2bcd8739ae039 {
    /**
     * Initializes the Push
     *
     * @param channel The Channel
     * @param event The event, for example `"phx_join"`
     * @param payload The payload, for example `{user_id: 123}`
     * @param timeout The push timeout in milliseconds
     */ constructor(channel, event, payload = {}, timeout = (0, $853d1ad37d604b1f$export$7bd623b29ec8e1eb)){
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = undefined;
        this.ref = "";
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
    }
    resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = "";
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
    }
    send() {
        if (this._hasReceived("timeout")) return;
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        });
    }
    updatePayload(payload) {
        this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
    receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        this.recHooks.push({
            status: status,
            callback: callback
        });
        return this;
    }
    startTimeout() {
        if (this.timeoutTimer) return;
        this.ref = this.channel.socket._makeRef();
        this.refEvent = this.channel._replyEventName(this.ref);
        const callback = (payload)=>{
            this._cancelRefEvent();
            this._cancelTimeout();
            this.receivedResp = payload;
            this._matchReceive(payload);
        };
        this.channel._on(this.refEvent, {}, callback);
        this.timeoutTimer = setTimeout(()=>{
            this.trigger("timeout", {});
        }, this.timeout);
    }
    trigger(status, response) {
        if (this.refEvent) this.channel._trigger(this.refEvent, {
            status: status,
            response: response
        });
    }
    destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
    }
    _cancelRefEvent() {
        if (!this.refEvent) return;
        this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = undefined;
    }
    _matchReceive({ status: status, response: response }) {
        this.recHooks.filter((h)=>h.status === status).forEach((h)=>h.callback(response));
    }
    _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
    }
}



/*
  This file draws heavily from https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/assets/js/phoenix/presence.js
  License: https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/LICENSE.md
*/ var $0e70809d2e669721$export$f1ce049df2794fb4;
(function(REALTIME_PRESENCE_LISTEN_EVENTS) {
    REALTIME_PRESENCE_LISTEN_EVENTS["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS["LEAVE"] = "leave";
})($0e70809d2e669721$export$f1ce049df2794fb4 || ($0e70809d2e669721$export$f1ce049df2794fb4 = {}));
class $0e70809d2e669721$export$2e2bcd8739ae039 {
    /**
     * Initializes the Presence.
     *
     * @param channel - The RealtimeChannel
     * @param opts - The options,
     *        for example `{events: {state: 'state', diff: 'diff'}}`
     */ constructor(channel, opts){
        this.channel = channel;
        this.state = {};
        this.pendingDiffs = [];
        this.joinRef = null;
        this.caller = {
            onJoin: ()=>{},
            onLeave: ()=>{},
            onSync: ()=>{}
        };
        const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(events.state, {}, (newState)=>{
            const { onJoin: onJoin, onLeave: onLeave, onSync: onSync } = this.caller;
            this.joinRef = this.channel._joinRef();
            this.state = $0e70809d2e669721$export$2e2bcd8739ae039.syncState(this.state, newState, onJoin, onLeave);
            this.pendingDiffs.forEach((diff)=>{
                this.state = $0e70809d2e669721$export$2e2bcd8739ae039.syncDiff(this.state, diff, onJoin, onLeave);
            });
            this.pendingDiffs = [];
            onSync();
        });
        this.channel._on(events.diff, {}, (diff)=>{
            const { onJoin: onJoin, onLeave: onLeave, onSync: onSync } = this.caller;
            if (this.inPendingSyncState()) this.pendingDiffs.push(diff);
            else {
                this.state = $0e70809d2e669721$export$2e2bcd8739ae039.syncDiff(this.state, diff, onJoin, onLeave);
                onSync();
            }
        });
        this.onJoin((key, currentPresences, newPresences)=>{
            this.channel._trigger("presence", {
                event: "join",
                key: key,
                currentPresences: currentPresences,
                newPresences: newPresences
            });
        });
        this.onLeave((key, currentPresences, leftPresences)=>{
            this.channel._trigger("presence", {
                event: "leave",
                key: key,
                currentPresences: currentPresences,
                leftPresences: leftPresences
            });
        });
        this.onSync(()=>{
            this.channel._trigger("presence", {
                event: "sync"
            });
        });
    }
    /**
     * Used to sync the list of presences on the server with the
     * client's state.
     *
     * An optional `onJoin` and `onLeave` callback can be provided to
     * react to changes in the client's local presences across
     * disconnects and reconnects with the server.
     *
     * @internal
     */ static syncState(currentState, newState, onJoin, onLeave) {
        const state = this.cloneDeep(currentState);
        const transformedState = this.transformState(newState);
        const joins = {};
        const leaves = {};
        this.map(state, (key, presences)=>{
            if (!transformedState[key]) leaves[key] = presences;
        });
        this.map(transformedState, (key, newPresences)=>{
            const currentPresences = state[key];
            if (currentPresences) {
                const newPresenceRefs = newPresences.map((m)=>m.presence_ref);
                const curPresenceRefs = currentPresences.map((m)=>m.presence_ref);
                const joinedPresences = newPresences.filter((m)=>curPresenceRefs.indexOf(m.presence_ref) < 0);
                const leftPresences = currentPresences.filter((m)=>newPresenceRefs.indexOf(m.presence_ref) < 0);
                if (joinedPresences.length > 0) joins[key] = joinedPresences;
                if (leftPresences.length > 0) leaves[key] = leftPresences;
            } else joins[key] = newPresences;
        });
        return this.syncDiff(state, {
            joins: joins,
            leaves: leaves
        }, onJoin, onLeave);
    }
    /**
     * Used to sync a diff of presence join and leave events from the
     * server, as they happen.
     *
     * Like `syncState`, `syncDiff` accepts optional `onJoin` and
     * `onLeave` callbacks to react to a user joining or leaving from a
     * device.
     *
     * @internal
     */ static syncDiff(state, diff, onJoin, onLeave) {
        const { joins: joins, leaves: leaves } = {
            joins: this.transformState(diff.joins),
            leaves: this.transformState(diff.leaves)
        };
        if (!onJoin) onJoin = ()=>{};
        if (!onLeave) onLeave = ()=>{};
        this.map(joins, (key, newPresences)=>{
            var _a;
            const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
            state[key] = this.cloneDeep(newPresences);
            if (currentPresences.length > 0) {
                const joinedPresenceRefs = state[key].map((m)=>m.presence_ref);
                const curPresences = currentPresences.filter((m)=>joinedPresenceRefs.indexOf(m.presence_ref) < 0);
                state[key].unshift(...curPresences);
            }
            onJoin(key, currentPresences, newPresences);
        });
        this.map(leaves, (key, leftPresences)=>{
            let currentPresences = state[key];
            if (!currentPresences) return;
            const presenceRefsToRemove = leftPresences.map((m)=>m.presence_ref);
            currentPresences = currentPresences.filter((m)=>presenceRefsToRemove.indexOf(m.presence_ref) < 0);
            state[key] = currentPresences;
            onLeave(key, currentPresences, leftPresences);
            if (currentPresences.length === 0) delete state[key];
        });
        return state;
    }
    /** @internal */ static map(obj, func) {
        return Object.getOwnPropertyNames(obj).map((key)=>func(key, obj[key]));
    }
    /**
     * Remove 'metas' key
     * Change 'phx_ref' to 'presence_ref'
     * Remove 'phx_ref' and 'phx_ref_prev'
     *
     * @example
     * // returns {
     *  abc123: [
     *    { presence_ref: '2', user_id: 1 },
     *    { presence_ref: '3', user_id: 2 }
     *  ]
     * }
     * RealtimePresence.transformState({
     *  abc123: {
     *    metas: [
     *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
     *      { phx_ref: '3', user_id: 2 }
     *    ]
     *  }
     * })
     *
     * @internal
     */ static transformState(state) {
        state = this.cloneDeep(state);
        return Object.getOwnPropertyNames(state).reduce((newState, key)=>{
            const presences = state[key];
            if ("metas" in presences) newState[key] = presences.metas.map((presence)=>{
                presence["presence_ref"] = presence["phx_ref"];
                delete presence["phx_ref"];
                delete presence["phx_ref_prev"];
                return presence;
            });
            else newState[key] = presences;
            return newState;
        }, {});
    }
    /** @internal */ static cloneDeep(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    /** @internal */ onJoin(callback) {
        this.caller.onJoin = callback;
    }
    /** @internal */ onLeave(callback) {
        this.caller.onLeave = callback;
    }
    /** @internal */ onSync(callback) {
        this.caller.onSync = callback;
    }
    /** @internal */ inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
}


/**
 * Helpers to convert the change Payload into native JS types.
 */ // Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
// 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
var $bbd73355b15e0774$export$4d213a7d364021dc;
(function(PostgresTypes) {
    PostgresTypes["abstime"] = "abstime";
    PostgresTypes["bool"] = "bool";
    PostgresTypes["date"] = "date";
    PostgresTypes["daterange"] = "daterange";
    PostgresTypes["float4"] = "float4";
    PostgresTypes["float8"] = "float8";
    PostgresTypes["int2"] = "int2";
    PostgresTypes["int4"] = "int4";
    PostgresTypes["int4range"] = "int4range";
    PostgresTypes["int8"] = "int8";
    PostgresTypes["int8range"] = "int8range";
    PostgresTypes["json"] = "json";
    PostgresTypes["jsonb"] = "jsonb";
    PostgresTypes["money"] = "money";
    PostgresTypes["numeric"] = "numeric";
    PostgresTypes["oid"] = "oid";
    PostgresTypes["reltime"] = "reltime";
    PostgresTypes["text"] = "text";
    PostgresTypes["time"] = "time";
    PostgresTypes["timestamp"] = "timestamp";
    PostgresTypes["timestamptz"] = "timestamptz";
    PostgresTypes["timetz"] = "timetz";
    PostgresTypes["tsrange"] = "tsrange";
    PostgresTypes["tstzrange"] = "tstzrange";
})($bbd73355b15e0774$export$4d213a7d364021dc || ($bbd73355b15e0774$export$4d213a7d364021dc = {}));
const $bbd73355b15e0774$export$20ce708a1f594c5e = (columns, record, options = {})=>{
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    return Object.keys(record).reduce((acc, rec_key)=>{
        acc[rec_key] = $bbd73355b15e0774$export$c054edfec1afa88d(rec_key, columns, record, skipTypes);
        return acc;
    }, {});
};
const $bbd73355b15e0774$export$c054edfec1afa88d = (columnName, columns, record, skipTypes)=>{
    const column = columns.find((x)=>x.name === columnName);
    const colType = column === null || column === void 0 ? void 0 : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) return $bbd73355b15e0774$export$3df02a362b86a91(colType, value);
    return $bbd73355b15e0774$var$noop(value);
};
const $bbd73355b15e0774$export$3df02a362b86a91 = (type, value)=>{
    // if data type is an array
    if (type.charAt(0) === "_") {
        const dataType = type.slice(1, type.length);
        return $bbd73355b15e0774$export$45b10814cc054894(value, dataType);
    }
    // If not null, convert to correct type.
    switch(type){
        case $bbd73355b15e0774$export$4d213a7d364021dc.bool:
            return $bbd73355b15e0774$export$3c2e6d1b7583eee6(value);
        case $bbd73355b15e0774$export$4d213a7d364021dc.float4:
        case $bbd73355b15e0774$export$4d213a7d364021dc.float8:
        case $bbd73355b15e0774$export$4d213a7d364021dc.int2:
        case $bbd73355b15e0774$export$4d213a7d364021dc.int4:
        case $bbd73355b15e0774$export$4d213a7d364021dc.int8:
        case $bbd73355b15e0774$export$4d213a7d364021dc.numeric:
        case $bbd73355b15e0774$export$4d213a7d364021dc.oid:
            return $bbd73355b15e0774$export$a0a81dc3380ce7d3(value);
        case $bbd73355b15e0774$export$4d213a7d364021dc.json:
        case $bbd73355b15e0774$export$4d213a7d364021dc.jsonb:
            return $bbd73355b15e0774$export$d5b7a8bf56ee1fe2(value);
        case $bbd73355b15e0774$export$4d213a7d364021dc.timestamp:
            return $bbd73355b15e0774$export$eccf8c5d91d19e3a(value); // Format to be consistent with PostgREST
        case $bbd73355b15e0774$export$4d213a7d364021dc.abstime:
        case $bbd73355b15e0774$export$4d213a7d364021dc.date:
        case $bbd73355b15e0774$export$4d213a7d364021dc.daterange:
        case $bbd73355b15e0774$export$4d213a7d364021dc.int4range:
        case $bbd73355b15e0774$export$4d213a7d364021dc.int8range:
        case $bbd73355b15e0774$export$4d213a7d364021dc.money:
        case $bbd73355b15e0774$export$4d213a7d364021dc.reltime:
        case $bbd73355b15e0774$export$4d213a7d364021dc.text:
        case $bbd73355b15e0774$export$4d213a7d364021dc.time:
        case $bbd73355b15e0774$export$4d213a7d364021dc.timestamptz:
        case $bbd73355b15e0774$export$4d213a7d364021dc.timetz:
        case $bbd73355b15e0774$export$4d213a7d364021dc.tsrange:
        case $bbd73355b15e0774$export$4d213a7d364021dc.tstzrange:
            return $bbd73355b15e0774$var$noop(value);
        default:
            // Return the value for remaining types
            return $bbd73355b15e0774$var$noop(value);
    }
};
const $bbd73355b15e0774$var$noop = (value)=>{
    return value;
};
const $bbd73355b15e0774$export$3c2e6d1b7583eee6 = (value)=>{
    switch(value){
        case "t":
            return true;
        case "f":
            return false;
        default:
            return value;
    }
};
const $bbd73355b15e0774$export$a0a81dc3380ce7d3 = (value)=>{
    if (typeof value === "string") {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) return parsedValue;
    }
    return value;
};
const $bbd73355b15e0774$export$d5b7a8bf56ee1fe2 = (value)=>{
    if (typeof value === "string") try {
        return JSON.parse(value);
    } catch (error) {
        console.log(`JSON parse error: ${error}`);
        return value;
    }
    return value;
};
const $bbd73355b15e0774$export$45b10814cc054894 = (value, type)=>{
    if (typeof value !== "string") return value;
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    // Confirm value is a Postgres array by checking curly brackets
    if (openBrace === "{" && closeBrace === "}") {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        // TODO: find a better solution to separate Postgres array data
        try {
            arr = JSON.parse("[" + valTrim + "]");
        } catch (_) {
            // WARNING: splitting on comma does not cover all edge cases
            arr = valTrim ? valTrim.split(",") : [];
        }
        return arr.map((val)=>$bbd73355b15e0774$export$3df02a362b86a91(type, val));
    }
    return value;
};
const $bbd73355b15e0774$export$eccf8c5d91d19e3a = (value)=>{
    if (typeof value === "string") return value.replace(" ", "T");
    return value;
};


var $33a68c7aba181160$export$bc171c571098b6c4;
(function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["DELETE"] = "DELETE";
})($33a68c7aba181160$export$bc171c571098b6c4 || ($33a68c7aba181160$export$bc171c571098b6c4 = {}));
var $33a68c7aba181160$export$9e3fe8e487ef792e;
(function(REALTIME_LISTEN_TYPES) {
    REALTIME_LISTEN_TYPES["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES["PRESENCE"] = "presence";
    /**
     * listen to Postgres changes.
     */ REALTIME_LISTEN_TYPES["POSTGRES_CHANGES"] = "postgres_changes";
})($33a68c7aba181160$export$9e3fe8e487ef792e || ($33a68c7aba181160$export$9e3fe8e487ef792e = {}));
var $33a68c7aba181160$export$a6885b926af646a2;
(function(REALTIME_SUBSCRIBE_STATES) {
    REALTIME_SUBSCRIBE_STATES["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})($33a68c7aba181160$export$a6885b926af646a2 || ($33a68c7aba181160$export$a6885b926af646a2 = {}));
const $33a68c7aba181160$export$154db638d9c0559e = (0, $853d1ad37d604b1f$export$b83816118db74fe7);
class $33a68c7aba181160$export$2e2bcd8739ae039 {
    constructor(/** Topic name can be any string. */ topic, params = {
        config: {}
    }, socket){
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = {};
        this.state = (0, $853d1ad37d604b1f$export$b83816118db74fe7).closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.subTopic = topic.replace(/^realtime:/i, "");
        this.params.config = Object.assign({
            broadcast: {
                ack: false,
                self: false
            },
            presence: {
                key: ""
            }
        }, params.config);
        this.timeout = this.socket.timeout;
        this.joinPush = new (0, $81eb9012471dfe15$export$2e2bcd8739ae039)(this, (0, $853d1ad37d604b1f$export$8db7548e65d6ea55).join, this.params, this.timeout);
        this.rejoinTimer = new (0, $23c4e887bda29cc5$export$2e2bcd8739ae039)(()=>this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive("ok", ()=>{
            this.state = (0, $853d1ad37d604b1f$export$b83816118db74fe7).joined;
            this.rejoinTimer.reset();
            this.pushBuffer.forEach((pushEvent)=>pushEvent.send());
            this.pushBuffer = [];
        });
        this._onClose(()=>{
            this.rejoinTimer.reset();
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`);
            this.state = (0, $853d1ad37d604b1f$export$b83816118db74fe7).closed;
            this.socket._remove(this);
        });
        this._onError((reason)=>{
            if (this._isLeaving() || this._isClosed()) return;
            this.socket.log("channel", `error ${this.topic}`, reason);
            this.state = (0, $853d1ad37d604b1f$export$b83816118db74fe7).errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive("timeout", ()=>{
            if (!this._isJoining()) return;
            this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
            this.state = (0, $853d1ad37d604b1f$export$b83816118db74fe7).errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this._on((0, $853d1ad37d604b1f$export$8db7548e65d6ea55).reply, {}, (payload, ref)=>{
            this._trigger(this._replyEventName(ref), payload);
        });
        this.presence = new (0, $0e70809d2e669721$export$2e2bcd8739ae039)(this);
        this.broadcastEndpointURL = this._broadcastEndpointURL();
    }
    /** Subscribe registers your client with the server */ subscribe(callback, timeout = this.timeout) {
        var _a, _b;
        if (!this.socket.isConnected()) this.socket.connect();
        if (this.joinedOnce) throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
        else {
            const { config: { broadcast: broadcast, presence: presence } } = this.params;
            this._onError((e)=>callback && callback("CHANNEL_ERROR", e));
            this._onClose(()=>callback && callback("CLOSED"));
            const accessTokenPayload = {};
            const config = {
                broadcast: broadcast,
                presence: presence,
                postgres_changes: (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map((r)=>r.filter)) !== null && _b !== void 0 ? _b : []
            };
            if (this.socket.accessToken) accessTokenPayload.access_token = this.socket.accessToken;
            this.updateJoinPayload(Object.assign({
                config: config
            }, accessTokenPayload));
            this.joinedOnce = true;
            this._rejoin(timeout);
            this.joinPush.receive("ok", ({ postgres_changes: serverPostgresFilters })=>{
                var _a;
                this.socket.accessToken && this.socket.setAuth(this.socket.accessToken);
                if (serverPostgresFilters === undefined) {
                    callback && callback("SUBSCRIBED");
                    return;
                } else {
                    const clientPostgresBindings = this.bindings.postgres_changes;
                    const bindingsLen = (_a = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a !== void 0 ? _a : 0;
                    const newPostgresBindings = [];
                    for(let i = 0; i < bindingsLen; i++){
                        const clientPostgresBinding = clientPostgresBindings[i];
                        const { filter: { event: event, schema: schema, table: table, filter: filter } } = clientPostgresBinding;
                        const serverPostgresFilter = serverPostgresFilters && serverPostgresFilters[i];
                        if (serverPostgresFilter && serverPostgresFilter.event === event && serverPostgresFilter.schema === schema && serverPostgresFilter.table === table && serverPostgresFilter.filter === filter) newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), {
                            id: serverPostgresFilter.id
                        }));
                        else {
                            this.unsubscribe();
                            callback && callback("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
                            return;
                        }
                    }
                    this.bindings.postgres_changes = newPostgresBindings;
                    callback && callback("SUBSCRIBED");
                    return;
                }
            }).receive("error", (error)=>{
                callback && callback("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(error).join(", ") || "error")));
                return;
            }).receive("timeout", ()=>{
                callback && callback("TIMED_OUT");
                return;
            });
        }
        return this;
    }
    presenceState() {
        return this.presence.state;
    }
    async track(payload, opts = {}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: payload
        }, opts.timeout || this.timeout);
    }
    async untrack(opts = {}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, opts);
    }
    on(type, filter, callback) {
        return this._on(type, filter, callback);
    }
    /**
     * Sends a message into the channel.
     *
     * @param args Arguments to send to channel
     * @param args.type The type of event to send
     * @param args.event The name of the event being sent
     * @param args.payload Payload to be sent
     * @param opts Options to be used during the send process
     */ async send(args, opts = {}) {
        var _a, _b;
        if (!this._canPush() && args.type === "broadcast") {
            const { event: event, payload: endpoint_payload } = args;
            const options = {
                method: "POST",
                headers: {
                    apikey: (_a = this.socket.apiKey) !== null && _a !== void 0 ? _a : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [
                        {
                            topic: this.subTopic,
                            event: event,
                            payload: endpoint_payload
                        }
                    ]
                })
            };
            try {
                const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_b = opts.timeout) !== null && _b !== void 0 ? _b : this.timeout);
                if (response.ok) return "ok";
                else return "error";
            } catch (error) {
                if (error.name === "AbortError") return "timed out";
                else return "error";
            }
        } else return new Promise((resolve)=>{
            var _a, _b, _c;
            const push = this._push(args.type, args, opts.timeout || this.timeout);
            if (args.type === "broadcast" && !((_c = (_b = (_a = this.params) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) resolve("ok");
            push.receive("ok", ()=>resolve("ok"));
            push.receive("timeout", ()=>resolve("timed out"));
        });
    }
    updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
    }
    /**
     * Leaves the channel.
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */ unsubscribe(timeout = this.timeout) {
        this.state = (0, $853d1ad37d604b1f$export$b83816118db74fe7).leaving;
        const onClose = ()=>{
            this.socket.log("channel", `leave ${this.topic}`);
            this._trigger((0, $853d1ad37d604b1f$export$8db7548e65d6ea55).close, "leave", this._joinRef());
        };
        this.rejoinTimer.reset();
        // Destroy joinPush to avoid connection timeouts during unscription phase
        this.joinPush.destroy();
        return new Promise((resolve)=>{
            const leavePush = new (0, $81eb9012471dfe15$export$2e2bcd8739ae039)(this, (0, $853d1ad37d604b1f$export$8db7548e65d6ea55).leave, {}, timeout);
            leavePush.receive("ok", ()=>{
                onClose();
                resolve("ok");
            }).receive("timeout", ()=>{
                onClose();
                resolve("timed out");
            }).receive("error", ()=>{
                resolve("error");
            });
            leavePush.send();
            if (!this._canPush()) leavePush.trigger("ok", {});
        });
    }
    /** @internal */ _broadcastEndpointURL() {
        let url = this.socket.endPoint;
        url = url.replace(/^ws/i, "http");
        url = url.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "");
        return url.replace(/\/+$/, "") + "/api/broadcast";
    }
    async _fetchWithTimeout(url, options, timeout) {
        const controller = new AbortController();
        const id = setTimeout(()=>controller.abort(), timeout);
        const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), {
            signal: controller.signal
        }));
        clearTimeout(id);
        return response;
    }
    /** @internal */ _push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let pushEvent = new (0, $81eb9012471dfe15$export$2e2bcd8739ae039)(this, event, payload, timeout);
        if (this._canPush()) pushEvent.send();
        else {
            pushEvent.startTimeout();
            this.pushBuffer.push(pushEvent);
        }
        return pushEvent;
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     *
     * @internal
     */ _onMessage(_event, payload, _ref) {
        return payload;
    }
    /** @internal */ _isMember(topic) {
        return this.topic === topic;
    }
    /** @internal */ _joinRef() {
        return this.joinPush.ref;
    }
    /** @internal */ _trigger(type, payload, ref) {
        var _a, _b;
        const typeLower = type.toLocaleLowerCase();
        const { close: close, error: error, leave: leave, join: join } = (0, $853d1ad37d604b1f$export$8db7548e65d6ea55);
        const events = [
            close,
            error,
            leave,
            join
        ];
        if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) return;
        let handledPayload = this._onMessage(typeLower, payload, ref);
        if (payload && !handledPayload) throw "channel onMessage callbacks must return the payload, modified or unmodified";
        if ([
            "insert",
            "update",
            "delete"
        ].includes(typeLower)) (_a = this.bindings.postgres_changes) === null || _a === void 0 || _a.filter((bind)=>{
            var _a, _b, _c;
            return ((_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event) === "*" || ((_c = (_b = bind.filter) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
        }).map((bind)=>bind.callback(handledPayload, ref));
        else (_b = this.bindings[typeLower]) === null || _b === void 0 || _b.filter((bind)=>{
            var _a, _b, _c, _d, _e, _f;
            if ([
                "broadcast",
                "presence",
                "postgres_changes"
            ].includes(typeLower)) {
                if ("id" in bind) {
                    const bindId = bind.id;
                    const bindEvent = (_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event;
                    return bindId && ((_b = payload.ids) === null || _b === void 0 ? void 0 : _b.includes(bindId)) && (bindEvent === "*" || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
                } else {
                    const bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
                    return bindEvent === "*" || bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
                }
            } else return bind.type.toLocaleLowerCase() === typeLower;
        }).map((bind)=>{
            if (typeof handledPayload === "object" && "ids" in handledPayload) {
                const postgresChanges = handledPayload.data;
                const { schema: schema, table: table, commit_timestamp: commit_timestamp, type: type, errors: errors } = postgresChanges;
                const enrichedPayload = {
                    schema: schema,
                    table: table,
                    commit_timestamp: commit_timestamp,
                    eventType: type,
                    new: {},
                    old: {},
                    errors: errors
                };
                handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
            }
            bind.callback(handledPayload, ref);
        });
    }
    /** @internal */ _isClosed() {
        return this.state === (0, $853d1ad37d604b1f$export$b83816118db74fe7).closed;
    }
    /** @internal */ _isJoined() {
        return this.state === (0, $853d1ad37d604b1f$export$b83816118db74fe7).joined;
    }
    /** @internal */ _isJoining() {
        return this.state === (0, $853d1ad37d604b1f$export$b83816118db74fe7).joining;
    }
    /** @internal */ _isLeaving() {
        return this.state === (0, $853d1ad37d604b1f$export$b83816118db74fe7).leaving;
    }
    /** @internal */ _replyEventName(ref) {
        return `chan_reply_${ref}`;
    }
    /** @internal */ _on(type, filter, callback) {
        const typeLower = type.toLocaleLowerCase();
        const binding = {
            type: typeLower,
            filter: filter,
            callback: callback
        };
        if (this.bindings[typeLower]) this.bindings[typeLower].push(binding);
        else this.bindings[typeLower] = [
            binding
        ];
        return this;
    }
    /** @internal */ _off(type, filter) {
        const typeLower = type.toLocaleLowerCase();
        this.bindings[typeLower] = this.bindings[typeLower].filter((bind)=>{
            var _a;
            return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && $33a68c7aba181160$export$2e2bcd8739ae039.isEqual(bind.filter, filter));
        });
        return this;
    }
    /** @internal */ static isEqual(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
        for(const k in obj1){
            if (obj1[k] !== obj2[k]) return false;
        }
        return true;
    }
    /** @internal */ _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) this._rejoin();
    }
    /**
     * Registers a callback that will be executed when the channel closes.
     *
     * @internal
     */ _onClose(callback) {
        this._on((0, $853d1ad37d604b1f$export$8db7548e65d6ea55).close, {}, callback);
    }
    /**
     * Registers a callback that will be executed when the channel encounteres an error.
     *
     * @internal
     */ _onError(callback) {
        this._on((0, $853d1ad37d604b1f$export$8db7548e65d6ea55).error, {}, (reason)=>callback(reason));
    }
    /**
     * Returns `true` if the socket is connected and the channel has been joined.
     *
     * @internal
     */ _canPush() {
        return this.socket.isConnected() && this._isJoined();
    }
    /** @internal */ _rejoin(timeout = this.timeout) {
        if (this._isLeaving()) return;
        this.socket._leaveOpenTopic(this.topic);
        this.state = (0, $853d1ad37d604b1f$export$b83816118db74fe7).joining;
        this.joinPush.resend(timeout);
    }
    /** @internal */ _getPayloadRecords(payload) {
        const records = {
            new: {},
            old: {}
        };
        if (payload.type === "INSERT" || payload.type === "UPDATE") records.new = $bbd73355b15e0774$export$20ce708a1f594c5e(payload.columns, payload.record);
        if (payload.type === "UPDATE" || payload.type === "DELETE") records.old = $bbd73355b15e0774$export$20ce708a1f594c5e(payload.columns, payload.old_record);
        return records;
    }
}


const $4549dbed6f780083$var$noop = ()=>{};
const $4549dbed6f780083$var$NATIVE_WEBSOCKET_AVAILABLE = typeof WebSocket !== "undefined";


class $4549dbed6f780083$export$2e2bcd8739ae039 {
    /**
     * Initializes the Socket.
     *
     * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
     * @param options.transport The Websocket Transport, for example WebSocket.
     * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
     * @param options.params The optional params to pass when connecting.
     * @param options.headers The optional headers to pass when connecting.
     * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
     * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
     * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
     * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
     * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
     */ constructor(endPoint, options){
        var _a;
        this.accessToken = null;
        this.apiKey = null;
        this.channels = [];
        this.endPoint = "";
        this.headers = (0, $853d1ad37d604b1f$export$88a84136db6a4b64);
        this.params = {};
        this.timeout = (0, $853d1ad37d604b1f$export$7bd623b29ec8e1eb);
        this.heartbeatIntervalMs = 30000;
        this.heartbeatTimer = undefined;
        this.pendingHeartbeatRef = null;
        this.ref = 0;
        this.logger = $4549dbed6f780083$var$noop;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new (0, $d73bd1204d5040e7$export$2e2bcd8739ae039)();
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        };
        /**
         * Use either custom fetch, if provided, or default fetch to make HTTP requests
         *
         * @internal
         */ this._resolveFetch = (customFetch)=>{
            let _fetch;
            if (customFetch) _fetch = customFetch;
            else if (typeof fetch === "undefined") _fetch = (...args)=>Promise.resolve((parcelRequire("lYtBd"))).then(({ default: fetch1 })=>fetch1(...args));
            else _fetch = fetch;
            return (...args)=>_fetch(...args);
        };
        this.endPoint = `${endPoint}/${(0, $853d1ad37d604b1f$export$b2688bfb999f5751).websocket}`;
        if (options === null || options === void 0 ? void 0 : options.transport) this.transport = options.transport;
        else this.transport = null;
        if (options === null || options === void 0 ? void 0 : options.params) this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.headers) this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
        if (options === null || options === void 0 ? void 0 : options.timeout) this.timeout = options.timeout;
        if (options === null || options === void 0 ? void 0 : options.logger) this.logger = options.logger;
        if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) this.heartbeatIntervalMs = options.heartbeatIntervalMs;
        const accessToken = (_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey;
        if (accessToken) {
            this.accessToken = accessToken;
            this.apiKey = accessToken;
        }
        this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs) ? options.reconnectAfterMs : (tries)=>{
            return [
                1000,
                2000,
                5000,
                10000
            ][tries - 1] || 10000;
        };
        this.encode = (options === null || options === void 0 ? void 0 : options.encode) ? options.encode : (payload, callback)=>{
            return callback(JSON.stringify(payload));
        };
        this.decode = (options === null || options === void 0 ? void 0 : options.decode) ? options.decode : this.serializer.decode.bind(this.serializer);
        this.reconnectTimer = new (0, $23c4e887bda29cc5$export$2e2bcd8739ae039)(async ()=>{
            this.disconnect();
            this.connect();
        }, this.reconnectAfterMs);
        this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
    }
    /**
     * Connects the socket, unless already connected.
     */ connect() {
        if (this.conn) return;
        if (this.transport) {
            this.conn = new this.transport(this._endPointURL(), undefined, {
                headers: this.headers
            });
            return;
        }
        if ($4549dbed6f780083$var$NATIVE_WEBSOCKET_AVAILABLE) {
            this.conn = new WebSocket(this._endPointURL());
            this.setupConnection();
            return;
        }
        this.conn = new $4549dbed6f780083$var$WSWebSocketDummy(this._endPointURL(), undefined, {
            close: ()=>{
                this.conn = null;
            }
        });
        (parcelRequire("9EYTn")).then(({ default: WS })=>{
            this.conn = new WS(this._endPointURL(), undefined, {
                headers: this.headers
            });
            this.setupConnection();
        });
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */ disconnect(code, reason) {
        if (this.conn) {
            this.conn.onclose = function() {}; // noop
            if (code) this.conn.close(code, reason !== null && reason !== void 0 ? reason : "");
            else this.conn.close();
            this.conn = null;
            // remove open handles
            this.heartbeatTimer && clearInterval(this.heartbeatTimer);
            this.reconnectTimer.reset();
        }
    }
    /**
     * Returns all created channels
     */ getChannels() {
        return this.channels;
    }
    /**
     * Unsubscribes and removes a single channel
     * @param channel A RealtimeChannel instance
     */ async removeChannel(channel) {
        const status = await channel.unsubscribe();
        if (this.channels.length === 0) this.disconnect();
        return status;
    }
    /**
     * Unsubscribes and removes all channels
     */ async removeAllChannels() {
        const values_1 = await Promise.all(this.channels.map((channel)=>channel.unsubscribe()));
        this.disconnect();
        return values_1;
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overridden.
     */ log(kind, msg, data) {
        this.logger(kind, msg, data);
    }
    /**
     * Returns the current state of the socket.
     */ connectionState() {
        switch(this.conn && this.conn.readyState){
            case (0, $853d1ad37d604b1f$export$a6d0320a1563d49e).connecting:
                return (0, $853d1ad37d604b1f$export$deda39003d27273).Connecting;
            case (0, $853d1ad37d604b1f$export$a6d0320a1563d49e).open:
                return (0, $853d1ad37d604b1f$export$deda39003d27273).Open;
            case (0, $853d1ad37d604b1f$export$a6d0320a1563d49e).closing:
                return (0, $853d1ad37d604b1f$export$deda39003d27273).Closing;
            default:
                return (0, $853d1ad37d604b1f$export$deda39003d27273).Closed;
        }
    }
    /**
     * Returns `true` is the connection is open.
     */ isConnected() {
        return this.connectionState() === (0, $853d1ad37d604b1f$export$deda39003d27273).Open;
    }
    channel(topic, params = {
        config: {}
    }) {
        const chan = new (0, $33a68c7aba181160$export$2e2bcd8739ae039)(`realtime:${topic}`, params, this);
        this.channels.push(chan);
        return chan;
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     */ push(data) {
        const { topic: topic, event: event, payload: payload, ref: ref } = data;
        const callback = ()=>{
            this.encode(data, (result)=>{
                var _a;
                (_a = this.conn) === null || _a === void 0 || _a.send(result);
            });
        };
        this.log("push", `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) callback();
        else this.sendBuffer.push(callback);
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * @param token A JWT string.
     */ setAuth(token) {
        this.accessToken = token;
        this.channels.forEach((channel)=>{
            token && channel.updateJoinPayload({
                access_token: token
            });
            if (channel.joinedOnce && channel._isJoined()) channel._push((0, $853d1ad37d604b1f$export$8db7548e65d6ea55).access_token, {
                access_token: token
            });
        });
    }
    /**
     * Return the next message ref, accounting for overflows
     *
     * @internal
     */ _makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) this.ref = 0;
        else this.ref = newRef;
        return this.ref.toString();
    }
    /**
     * Unsubscribe from channels with the specified topic.
     *
     * @internal
     */ _leaveOpenTopic(topic) {
        let dupChannel = this.channels.find((c)=>c.topic === topic && (c._isJoined() || c._isJoining()));
        if (dupChannel) {
            this.log("transport", `leaving duplicate topic "${topic}"`);
            dupChannel.unsubscribe();
        }
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     *
     * @internal
     */ _remove(channel) {
        this.channels = this.channels.filter((c)=>c._joinRef() !== channel._joinRef());
    }
    /**
     * Sets up connection handlers.
     *
     * @internal
     */ setupConnection() {
        if (this.conn) {
            this.conn.binaryType = "arraybuffer";
            this.conn.onopen = ()=>this._onConnOpen();
            this.conn.onerror = (error)=>this._onConnError(error);
            this.conn.onmessage = (event)=>this._onConnMessage(event);
            this.conn.onclose = (event)=>this._onConnClose(event);
        }
    }
    /**
     * Returns the URL of the websocket.
     *
     * @internal
     */ _endPointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: (0, $853d1ad37d604b1f$export$df3f558bb9a9c991)
        }));
    }
    /** @internal */ _onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg)=>{
            let { topic: topic, event: event, payload: payload, ref: ref } = msg;
            if (ref && ref === this.pendingHeartbeatRef || event === (payload === null || payload === void 0 ? void 0 : payload.type)) this.pendingHeartbeatRef = null;
            this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
            this.channels.filter((channel)=>channel._isMember(topic)).forEach((channel)=>channel._trigger(event, payload, ref));
            this.stateChangeCallbacks.message.forEach((callback)=>callback(msg));
        });
    }
    /** @internal */ _onConnOpen() {
        this.log("transport", `connected to ${this._endPointURL()}`);
        this._flushSendBuffer();
        this.reconnectTimer.reset();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(()=>this._sendHeartbeat(), this.heartbeatIntervalMs);
        this.stateChangeCallbacks.open.forEach((callback)=>callback());
    }
    /** @internal */ _onConnClose(event) {
        this.log("transport", "close", event);
        this._triggerChanError();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.reconnectTimer.scheduleTimeout();
        this.stateChangeCallbacks.close.forEach((callback)=>callback(event));
    }
    /** @internal */ _onConnError(error) {
        this.log("transport", error.message);
        this._triggerChanError();
        this.stateChangeCallbacks.error.forEach((callback)=>callback(error));
    }
    /** @internal */ _triggerChanError() {
        this.channels.forEach((channel)=>channel._trigger((0, $853d1ad37d604b1f$export$8db7548e65d6ea55).error));
    }
    /** @internal */ _appendParams(url, params) {
        if (Object.keys(params).length === 0) return url;
        const prefix = url.match(/\?/) ? "&" : "?";
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
    }
    /** @internal */ _flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
            this.sendBuffer.forEach((callback)=>callback());
            this.sendBuffer = [];
        }
    }
    /** @internal */ _sendHeartbeat() {
        var _a;
        if (!this.isConnected()) return;
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
            this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            (_a = this.conn) === null || _a === void 0 || _a.close((0, $853d1ad37d604b1f$export$5e80cf62e56a877b), "hearbeat timeout");
            return;
        }
        this.pendingHeartbeatRef = this._makeRef();
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        this.setAuth(this.accessToken);
    }
}
class $4549dbed6f780083$var$WSWebSocketDummy {
    constructor(address, _protocols, options){
        this.binaryType = "arraybuffer";
        this.onclose = ()=>{};
        this.onerror = ()=>{};
        this.onmessage = ()=>{};
        this.onopen = ()=>{};
        this.readyState = (0, $853d1ad37d604b1f$export$a6d0320a1563d49e).connecting;
        this.send = ()=>{};
        this.url = null;
        this.url = address;
        this.close = options.close;
    }
}






class $b965efc0850510d6$export$697502632950e9d3 extends Error {
    constructor(message){
        super(message);
        this.__isStorageError = true;
        this.name = "StorageError";
    }
}
function $b965efc0850510d6$export$5a322e77e5eb0561(error) {
    return typeof error === "object" && error !== null && "__isStorageError" in error;
}
class $b965efc0850510d6$export$ca9ecfd959b3871c extends $b965efc0850510d6$export$697502632950e9d3 {
    constructor(message, status){
        super(message);
        this.name = "StorageApiError";
        this.status = status;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
        };
    }
}
class $b965efc0850510d6$export$29127ca2e1a271d extends $b965efc0850510d6$export$697502632950e9d3 {
    constructor(message, originalError){
        super(message);
        this.name = "StorageUnknownError";
        this.originalError = originalError;
    }
}



var $37ff7d9b4eff5bd9$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const $37ff7d9b4eff5bd9$export$98d92b1aa79f8cc7 = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>Promise.resolve((parcelRequire("lYtBd"))).then(({ default: fetch1 })=>fetch1(...args));
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};

const $37ff7d9b4eff5bd9$export$ace1d6afc438cf26 = ()=>$37ff7d9b4eff5bd9$var$__awaiter(void 0, void 0, void 0, function*() {
        if (typeof Response === "undefined") // @ts-ignore
        return (yield Promise.resolve((parcelRequire("lYtBd")))).Response;
        return Response;
    });


var $868057e02a597cbd$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const $868057e02a597cbd$var$_getErrorMessage = (err)=>err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const $868057e02a597cbd$var$handleError = (error, reject)=>$868057e02a597cbd$var$__awaiter(void 0, void 0, void 0, function*() {
        const Res = yield (0, $37ff7d9b4eff5bd9$export$ace1d6afc438cf26)();
        if (error instanceof Res) error.json().then((err)=>{
            reject(new (0, $b965efc0850510d6$export$ca9ecfd959b3871c)($868057e02a597cbd$var$_getErrorMessage(err), error.status || 500));
        }).catch((err)=>{
            reject(new (0, $b965efc0850510d6$export$29127ca2e1a271d)($868057e02a597cbd$var$_getErrorMessage(err), err));
        });
        else reject(new (0, $b965efc0850510d6$export$29127ca2e1a271d)($868057e02a597cbd$var$_getErrorMessage(error), error));
    });
const $868057e02a597cbd$var$_getRequestParams = (method, options, parameters, body)=>{
    const params = {
        method: method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET") return params;
    params.headers = Object.assign({
        "Content-Type": "application/json"
    }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
function $868057e02a597cbd$var$_handleRequest(fetcher, method, url, options, parameters, body) {
    return $868057e02a597cbd$var$__awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            fetcher(url, $868057e02a597cbd$var$_getRequestParams(method, options, parameters, body)).then((result)=>{
                if (!result.ok) throw result;
                if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
                return result.json();
            }).then((data)=>resolve(data)).catch((error)=>$868057e02a597cbd$var$handleError(error, reject));
        });
    });
}
function $868057e02a597cbd$export$3988ae62b71be9a3(fetcher, url, options, parameters) {
    return $868057e02a597cbd$var$__awaiter(this, void 0, void 0, function*() {
        return $868057e02a597cbd$var$_handleRequest(fetcher, "GET", url, options, parameters);
    });
}
function $868057e02a597cbd$export$299ba2dee77727e9(fetcher, url, body, options, parameters) {
    return $868057e02a597cbd$var$__awaiter(this, void 0, void 0, function*() {
        return $868057e02a597cbd$var$_handleRequest(fetcher, "POST", url, options, parameters, body);
    });
}
function $868057e02a597cbd$export$327f7b26ebf455db(fetcher, url, body, options, parameters) {
    return $868057e02a597cbd$var$__awaiter(this, void 0, void 0, function*() {
        return $868057e02a597cbd$var$_handleRequest(fetcher, "PUT", url, options, parameters, body);
    });
}
function $868057e02a597cbd$export$cd7f480d6b8286c3(fetcher, url, body, options, parameters) {
    return $868057e02a597cbd$var$__awaiter(this, void 0, void 0, function*() {
        return $868057e02a597cbd$var$_handleRequest(fetcher, "DELETE", url, options, parameters, body);
    });
}



var $c71b2234f6b912c5$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const $c71b2234f6b912c5$var$DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
};
const $c71b2234f6b912c5$var$DEFAULT_FILE_OPTIONS = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: false
};
class $c71b2234f6b912c5$export$2e2bcd8739ae039 {
    constructor(url, headers = {}, bucketId, fetch){
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = (0, $37ff7d9b4eff5bd9$export$98d92b1aa79f8cc7)(fetch);
    }
    /**
     * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
     *
     * @param method HTTP method.
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */ uploadOrUpdate(method, path, fileBody, fileOptions) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            try {
                let body;
                const options = Object.assign(Object.assign({}, $c71b2234f6b912c5$var$DEFAULT_FILE_OPTIONS), fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), method === "POST" && {
                    "x-upsert": String(options.upsert)
                });
                if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append("cacheControl", options.cacheControl);
                    body.append("", fileBody);
                } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append("cacheControl", options.cacheControl);
                } else {
                    body = fileBody;
                    headers["cache-control"] = `max-age=${options.cacheControl}`;
                    headers["content-type"] = options.contentType;
                }
                const cleanPath = this._removeEmptyFolders(path);
                const _path = this._getFinalPath(cleanPath);
                const res = yield this.fetch(`${this.url}/object/${_path}`, Object.assign({
                    method: method,
                    body: body,
                    headers: headers
                }, (options === null || options === void 0 ? void 0 : options.duplex) ? {
                    duplex: options.duplex
                } : {}));
                const data = yield res.json();
                if (res.ok) return {
                    data: {
                        path: cleanPath,
                        id: data.Id,
                        fullPath: data.Key
                    },
                    error: null
                };
                else {
                    const error = data;
                    return {
                        data: null,
                        error: error
                    };
                }
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */ upload(path, fileBody, fileOptions) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
        });
    }
    /**
     * Upload a file with a token generated from `createSignedUploadUrl`.
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param token The token generated from `createSignedUploadUrl`
     * @param fileBody The body of the file to be stored in the bucket.
     */ uploadToSignedUrl(path, token, fileBody, fileOptions) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            const cleanPath = this._removeEmptyFolders(path);
            const _path = this._getFinalPath(cleanPath);
            const url = new URL(this.url + `/object/upload/sign/${_path}`);
            url.searchParams.set("token", token);
            try {
                let body;
                const options = Object.assign({
                    upsert: $c71b2234f6b912c5$var$DEFAULT_FILE_OPTIONS.upsert
                }, fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(options.upsert)
                });
                if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append("cacheControl", options.cacheControl);
                    body.append("", fileBody);
                } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append("cacheControl", options.cacheControl);
                } else {
                    body = fileBody;
                    headers["cache-control"] = `max-age=${options.cacheControl}`;
                    headers["content-type"] = options.contentType;
                }
                const res = yield this.fetch(url.toString(), {
                    method: "PUT",
                    body: body,
                    headers: headers
                });
                const data = yield res.json();
                if (res.ok) return {
                    data: {
                        path: cleanPath,
                        fullPath: data.Key
                    },
                    error: null
                };
                else {
                    const error = data;
                    return {
                        data: null,
                        error: error
                    };
                }
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Creates a signed upload URL.
     * Signed upload URLs can be used to upload files to the bucket without further authentication.
     * They are valid for 2 hours.
     * @param path The file path, including the current file name. For example `folder/image.png`.
     */ createSignedUploadUrl(path) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            try {
                let _path = this._getFinalPath(path);
                const data = yield (0, $868057e02a597cbd$export$299ba2dee77727e9)(this.fetch, `${this.url}/object/upload/sign/${_path}`, {}, {
                    headers: this.headers
                });
                const url = new URL(this.url + data.url);
                const token = url.searchParams.get("token");
                if (!token) throw new (0, $b965efc0850510d6$export$697502632950e9d3)("No token returned by API");
                return {
                    data: {
                        signedUrl: url.toString(),
                        path: path,
                        token: token
                    },
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
     * @param fileBody The body of the file to be stored in the bucket.
     */ update(path, fileBody, fileOptions) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
        });
    }
    /**
     * Moves an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
     */ move(fromPath, toPath) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, $868057e02a597cbd$export$299ba2dee77727e9)(this.fetch, `${this.url}/object/move`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath
                }, {
                    headers: this.headers
                });
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Copies an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     */ copy(fromPath, toPath) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, $868057e02a597cbd$export$299ba2dee77727e9)(this.fetch, `${this.url}/object/copy`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath
                }, {
                    headers: this.headers
                });
                return {
                    data: {
                        path: data.Key
                    },
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param path The file path, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */ createSignedUrl(path, expiresIn, options) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            try {
                let _path = this._getFinalPath(path);
                let data = yield (0, $868057e02a597cbd$export$299ba2dee77727e9)(this.fetch, `${this.url}/object/sign/${_path}`, Object.assign({
                    expiresIn: expiresIn
                }, (options === null || options === void 0 ? void 0 : options.transform) ? {
                    transform: options.transform
                } : {}), {
                    headers: this.headers
                });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
                const signedUrl = encodeURI(`${this.url}${data.signedURL}${downloadQueryParam}`);
                data = {
                    signedUrl: signedUrl
                };
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
     * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     */ createSignedUrls(paths, expiresIn, options) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, $868057e02a597cbd$export$299ba2dee77727e9)(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: expiresIn,
                    paths: paths
                }, {
                    headers: this.headers
                });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
                return {
                    data: data.map((datum)=>Object.assign(Object.assign({}, datum), {
                            signedUrl: datum.signedURL ? encodeURI(`${this.url}${datum.signedURL}${downloadQueryParam}`) : null
                        })),
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
     *
     * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
     * @param options.transform Transform the asset before serving it to the client.
     */ download(path, options) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
            const renderPath = wantsTransformation ? "render/image/authenticated" : "object";
            const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
            const queryString = transformationQuery ? `?${transformationQuery}` : "";
            try {
                const _path = this._getFinalPath(path);
                const res = yield (0, $868057e02a597cbd$export$3988ae62b71be9a3)(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
                    headers: this.headers,
                    noResolveJson: true
                });
                const data = yield res.blob();
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
     * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
     *
     * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
     * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */ getPublicUrl(path, options) {
        const _path = this._getFinalPath(path);
        const _queryString = [];
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `download=${options.download === true ? "" : options.download}` : "";
        if (downloadQueryParam !== "") _queryString.push(downloadQueryParam);
        const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
        const renderPath = wantsTransformation ? "render/image" : "object";
        const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
        if (transformationQuery !== "") _queryString.push(transformationQuery);
        let queryString = _queryString.join("&");
        if (queryString !== "") queryString = `?${queryString}`;
        return {
            data: {
                publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`)
            }
        };
    }
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
     */ remove(paths) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, $868057e02a597cbd$export$cd7f480d6b8286c3)(this.fetch, `${this.url}/object/${this.bucketId}`, {
                    prefixes: paths
                }, {
                    headers: this.headers
                });
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */ // async getMetadata(
    //   id: string
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */ // async updateMetadata(
    //   id: string,
    //   meta: Metadata
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await post(
    //       this.fetch,
    //       `${this.url}/metadata/${id}`,
    //       { ...meta },
    //       { headers: this.headers }
    //     )
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Lists all the files within a bucket.
     * @param path The folder path.
     */ list(path, options, parameters) {
        return $c71b2234f6b912c5$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const body = Object.assign(Object.assign(Object.assign({}, $c71b2234f6b912c5$var$DEFAULT_SEARCH_OPTIONS), options), {
                    prefix: path || ""
                });
                const data = yield (0, $868057e02a597cbd$export$299ba2dee77727e9)(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, {
                    headers: this.headers
                }, parameters);
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    _getFinalPath(path) {
        return `${this.bucketId}/${path}`;
    }
    _removeEmptyFolders(path) {
        return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(transform) {
        const params = [];
        if (transform.width) params.push(`width=${transform.width}`);
        if (transform.height) params.push(`height=${transform.height}`);
        if (transform.resize) params.push(`resize=${transform.resize}`);
        if (transform.format) params.push(`format=${transform.format}`);
        if (transform.quality) params.push(`quality=${transform.quality}`);
        return params.join("&");
    }
}


// generated by genversion
const $8641fb553f820d86$export$83d89fbfd8236492 = "2.5.5";


const $ae96aab4d9f16f29$export$88a84136db6a4b64 = {
    "X-Client-Info": `storage-js/${(0, $8641fb553f820d86$export$83d89fbfd8236492)}`
};





var $dcd52296eb90fcdf$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class $dcd52296eb90fcdf$export$2e2bcd8739ae039 {
    constructor(url, headers = {}, fetch){
        this.url = url;
        this.headers = Object.assign(Object.assign({}, (0, $ae96aab4d9f16f29$export$88a84136db6a4b64)), headers);
        this.fetch = (0, $37ff7d9b4eff5bd9$export$98d92b1aa79f8cc7)(fetch);
    }
    /**
     * Retrieves the details of all Storage buckets within an existing project.
     */ listBuckets() {
        return $dcd52296eb90fcdf$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, $868057e02a597cbd$export$3988ae62b71be9a3)(this.fetch, `${this.url}/bucket`, {
                    headers: this.headers
                });
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */ getBucket(id) {
        return $dcd52296eb90fcdf$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, $868057e02a597cbd$export$3988ae62b71be9a3)(this.fetch, `${this.url}/bucket/${id}`, {
                    headers: this.headers
                });
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     * @returns newly created bucket id
     */ createBucket(id, options = {
        public: false
    }) {
        return $dcd52296eb90fcdf$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, $868057e02a597cbd$export$299ba2dee77727e9)(this.fetch, `${this.url}/bucket`, {
                    id: id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes
                }, {
                    headers: this.headers
                });
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Updates a Storage bucket
     *
     * @param id A unique identifier for the bucket you are updating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     */ updateBucket(id, options) {
        return $dcd52296eb90fcdf$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, $868057e02a597cbd$export$327f7b26ebf455db)(this.fetch, `${this.url}/bucket/${id}`, {
                    id: id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes
                }, {
                    headers: this.headers
                });
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */ emptyBucket(id) {
        return $dcd52296eb90fcdf$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, $868057e02a597cbd$export$299ba2dee77727e9)(this.fetch, `${this.url}/bucket/${id}/empty`, {}, {
                    headers: this.headers
                });
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */ deleteBucket(id) {
        return $dcd52296eb90fcdf$var$__awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, $868057e02a597cbd$export$cd7f480d6b8286c3)(this.fetch, `${this.url}/bucket/${id}`, {}, {
                    headers: this.headers
                });
                return {
                    data: data,
                    error: null
                };
            } catch (error) {
                if ((0, $b965efc0850510d6$export$5a322e77e5eb0561)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
}


class $649f6e85d79b8793$export$6c85f5032e75eff9 extends (0, $dcd52296eb90fcdf$export$2e2bcd8739ae039) {
    constructor(url, headers = {}, fetch){
        super(url, headers, fetch);
    }
    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */ from(id) {
        return new (0, $c71b2234f6b912c5$export$2e2bcd8739ae039)(this.url, this.headers, id, this.fetch);
    }
}


const $fe862e19f8247872$export$83d89fbfd8236492 = "2.39.4";


let $ec498013eb2fb0cf$var$JS_ENV = "";
// @ts-ignore
if (typeof Deno !== "undefined") $ec498013eb2fb0cf$var$JS_ENV = "deno";
else if (typeof document !== "undefined") $ec498013eb2fb0cf$var$JS_ENV = "web";
else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") $ec498013eb2fb0cf$var$JS_ENV = "react-native";
else $ec498013eb2fb0cf$var$JS_ENV = "node";
const $ec498013eb2fb0cf$export$88a84136db6a4b64 = {
    "X-Client-Info": `supabase-js-${$ec498013eb2fb0cf$var$JS_ENV}/${(0, $fe862e19f8247872$export$83d89fbfd8236492)}`
};
const $ec498013eb2fb0cf$export$b63a5c3a2e5becd2 = {
    headers: $ec498013eb2fb0cf$export$88a84136db6a4b64
};
const $ec498013eb2fb0cf$export$b31378ae815bea6b = {
    schema: "public"
};
const $ec498013eb2fb0cf$export$af122550cc2345b3 = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: "implicit"
};
const $ec498013eb2fb0cf$export$59685507ca0a3912 = {};



var $lYtBd = parcelRequire("lYtBd");
var $e43b150e1f2ef1c7$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const $e43b150e1f2ef1c7$export$98d92b1aa79f8cc7 = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (0, $lYtBd.default);
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};
const $e43b150e1f2ef1c7$export$3d2cf54f85b7fc8a = ()=>{
    if (typeof Headers === "undefined") return 0, $lYtBd.Headers;
    return Headers;
};
const $e43b150e1f2ef1c7$export$651dd5aef824521f = (supabaseKey, getAccessToken, customFetch)=>{
    const fetch1 = $e43b150e1f2ef1c7$export$98d92b1aa79f8cc7(customFetch);
    const HeadersConstructor = $e43b150e1f2ef1c7$export$3d2cf54f85b7fc8a();
    return (input, init)=>$e43b150e1f2ef1c7$var$__awaiter(void 0, void 0, void 0, function*() {
            var _a;
            const accessToken = (_a = yield getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
            let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
            if (!headers.has("apikey")) headers.set("apikey", supabaseKey);
            if (!headers.has("Authorization")) headers.set("Authorization", `Bearer ${accessToken}`);
            return fetch1(input, Object.assign(Object.assign({}, init), {
                headers: headers
            }));
        });
};


function $b32da7225929a77a$export$31b40729666a4ae0() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function $b32da7225929a77a$export$d95b4586d238a081(url) {
    return url.replace(/\/$/, "");
}
const $b32da7225929a77a$export$4e09c449d6c407f7 = ()=>typeof window !== "undefined";
function $b32da7225929a77a$export$da186dc3f8eace71(options, defaults) {
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
    const { db: DEFAULT_DB_OPTIONS, auth: DEFAULT_AUTH_OPTIONS, realtime: DEFAULT_REALTIME_OPTIONS, global: DEFAULT_GLOBAL_OPTIONS } = defaults;
    return {
        db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
        auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
        realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
        global: Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions)
    };
}


function $48c7760cd45d5801$export$e02d0a488392f690(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
}
function $48c7760cd45d5801$export$31b40729666a4ae0() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
const $48c7760cd45d5801$export$4e09c449d6c407f7 = ()=>typeof document !== "undefined";
const $48c7760cd45d5801$var$localStorageWriteTests = {
    tested: false,
    writable: false
};
const $48c7760cd45d5801$export$9ec034ee80211814 = ()=>{
    if (!$48c7760cd45d5801$export$4e09c449d6c407f7()) return false;
    try {
        if (typeof globalThis.localStorage !== "object") return false;
    } catch (e) {
        // DOM exception when accessing `localStorage`
        return false;
    }
    if ($48c7760cd45d5801$var$localStorageWriteTests.tested) return $48c7760cd45d5801$var$localStorageWriteTests.writable;
    const randomKey = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(randomKey, randomKey);
        globalThis.localStorage.removeItem(randomKey);
        $48c7760cd45d5801$var$localStorageWriteTests.tested = true;
        $48c7760cd45d5801$var$localStorageWriteTests.writable = true;
    } catch (e) {
        // localStorage can't be written to
        // https://www.chromium.org/for-testers/bug-reporting-guidelines/uncaught-securityerror-failed-to-read-the-localstorage-property-from-window-access-is-denied-for-this-document
        $48c7760cd45d5801$var$localStorageWriteTests.tested = true;
        $48c7760cd45d5801$var$localStorageWriteTests.writable = false;
    }
    return $48c7760cd45d5801$var$localStorageWriteTests.writable;
};
function $48c7760cd45d5801$export$7a29392fb778224c(href) {
    const result = {};
    const url = new URL(href);
    if (url.hash && url.hash[0] === "#") try {
        const hashSearchParams = new URLSearchParams(url.hash.substring(1));
        hashSearchParams.forEach((value, key)=>{
            result[key] = value;
        });
    } catch (e) {
    // hash is not a query string
    }
    // search parameters take precedence over hash parameters
    url.searchParams.forEach((value, key)=>{
        result[key] = value;
    });
    return result;
}

const $48c7760cd45d5801$export$98d92b1aa79f8cc7 = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>Promise.resolve((parcelRequire("lYtBd"))).then(({ default: fetch1 })=>fetch1(...args));
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};
const $48c7760cd45d5801$export$e8ad6599be1036a7 = (maybeResponse)=>{
    return typeof maybeResponse === "object" && maybeResponse !== null && "status" in maybeResponse && "ok" in maybeResponse && "json" in maybeResponse && typeof maybeResponse.json === "function";
};
const $48c7760cd45d5801$export$e82c36d29078a87f = async (storage, key, data)=>{
    await storage.setItem(key, JSON.stringify(data));
};
const $48c7760cd45d5801$export$ba6fcb7c333d32c0 = async (storage, key)=>{
    const value = await storage.getItem(key);
    if (!value) return null;
    try {
        return JSON.parse(value);
    } catch (_a) {
        return value;
    }
};
const $48c7760cd45d5801$export$d35c645d585317ec = async (storage, key)=>{
    await storage.removeItem(key);
};
function $48c7760cd45d5801$export$f0d30a693d94f11c(value) {
    const key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let base64 = "";
    let chr1, chr2, chr3;
    let enc1, enc2, enc3, enc4;
    let i = 0;
    value = value.replace("-", "+").replace("_", "/");
    while(i < value.length){
        enc1 = key.indexOf(value.charAt(i++));
        enc2 = key.indexOf(value.charAt(i++));
        enc3 = key.indexOf(value.charAt(i++));
        enc4 = key.indexOf(value.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        base64 = base64 + String.fromCharCode(chr1);
        if (enc3 != 64 && chr2 != 0) base64 = base64 + String.fromCharCode(chr2);
        if (enc4 != 64 && chr3 != 0) base64 = base64 + String.fromCharCode(chr3);
    }
    return base64;
}
class $48c7760cd45d5801$export$85f6557964517f1a {
    constructor(){
        this.promise = new $48c7760cd45d5801$export$85f6557964517f1a.promiseConstructor((res, rej)=>{
            this.resolve = res;
            this.reject = rej;
        });
    }
}
$48c7760cd45d5801$export$85f6557964517f1a.promiseConstructor = Promise;
function $48c7760cd45d5801$export$cc1c0b988f7b5577(token) {
    // Regex checks for base64url format
    const base64UrlRegex = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i;
    const parts = token.split(".");
    if (parts.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
    if (!base64UrlRegex.test(parts[1])) throw new Error("JWT is not valid: payload is not in base64url format");
    const base64Url = parts[1];
    return JSON.parse($48c7760cd45d5801$export$f0d30a693d94f11c(base64Url));
}
async function $48c7760cd45d5801$export$e772c8ff12451969(time) {
    return await new Promise((accept)=>{
        setTimeout(()=>accept(null), time);
    });
}
function $48c7760cd45d5801$export$9e1b8e833f44ff21(fn, isRetryable) {
    const promise = new Promise((accept, reject)=>{
        (async ()=>{
            for(let attempt = 0; attempt < Infinity; attempt++)try {
                const result = await fn(attempt);
                if (!isRetryable(attempt, null, result)) {
                    accept(result);
                    return;
                }
            } catch (e) {
                if (!isRetryable(attempt, e)) {
                    reject(e);
                    return;
                }
            }
        })();
    });
    return promise;
}
function $48c7760cd45d5801$var$dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
}
function $48c7760cd45d5801$export$b6c3b8498f152f15() {
    const verifierLength = 56;
    const array = new Uint32Array(verifierLength);
    if (typeof crypto === "undefined") {
        const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
        const charSetLen = charSet.length;
        let verifier = "";
        for(let i = 0; i < verifierLength; i++)verifier += charSet.charAt(Math.floor(Math.random() * charSetLen));
        return verifier;
    }
    crypto.getRandomValues(array);
    return Array.from(array, $48c7760cd45d5801$var$dec2hex).join("");
}
async function $48c7760cd45d5801$var$sha256(randomString) {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(randomString);
    const hash = await crypto.subtle.digest("SHA-256", encodedData);
    const bytes = new Uint8Array(hash);
    return Array.from(bytes).map((c)=>String.fromCharCode(c)).join("");
}
function $48c7760cd45d5801$var$base64urlencode(str) {
    return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function $48c7760cd45d5801$export$eb79e16bb8189148(verifier) {
    const hasCryptoSupport = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" && typeof TextEncoder !== "undefined";
    if (!hasCryptoSupport) {
        console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
        return verifier;
    }
    const hashed = await $48c7760cd45d5801$var$sha256(verifier);
    return $48c7760cd45d5801$var$base64urlencode(hashed);
}


class $33da15cd88dce4fa$export$145273558d58e0ac extends Error {
    constructor(message, status){
        super(message);
        this.__isAuthError = true;
        this.name = "AuthError";
        this.status = status;
    }
}
function $33da15cd88dce4fa$export$cde1786a482f9a1c(error) {
    return typeof error === "object" && error !== null && "__isAuthError" in error;
}
class $33da15cd88dce4fa$export$45fde0b55b14f37b extends $33da15cd88dce4fa$export$145273558d58e0ac {
    constructor(message, status){
        super(message, status);
        this.name = "AuthApiError";
        this.status = status;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
        };
    }
}
function $33da15cd88dce4fa$export$4fe744aeb810d543(error) {
    return $33da15cd88dce4fa$export$cde1786a482f9a1c(error) && error.name === "AuthApiError";
}
class $33da15cd88dce4fa$export$f7559805d4a50078 extends $33da15cd88dce4fa$export$145273558d58e0ac {
    constructor(message, originalError){
        super(message);
        this.name = "AuthUnknownError";
        this.originalError = originalError;
    }
}
class $33da15cd88dce4fa$export$823c745ae0673c5e extends $33da15cd88dce4fa$export$145273558d58e0ac {
    constructor(message, name, status){
        super(message);
        this.name = name;
        this.status = status;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
        };
    }
}
class $33da15cd88dce4fa$export$403b3fc0d3ad5f0c extends $33da15cd88dce4fa$export$823c745ae0673c5e {
    constructor(){
        super("Auth session missing!", "AuthSessionMissingError", 400);
    }
}
class $33da15cd88dce4fa$export$7e277b620449c1b4 extends $33da15cd88dce4fa$export$823c745ae0673c5e {
    constructor(){
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500);
    }
}
class $33da15cd88dce4fa$export$9ef583f0381b4cc extends $33da15cd88dce4fa$export$823c745ae0673c5e {
    constructor(message){
        super(message, "AuthInvalidCredentialsError", 400);
    }
}
class $33da15cd88dce4fa$export$bf5df8e043856ef5 extends $33da15cd88dce4fa$export$823c745ae0673c5e {
    constructor(message, details = null){
        super(message, "AuthImplicitGrantRedirectError", 500);
        this.details = null;
        this.details = details;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        };
    }
}
class $33da15cd88dce4fa$export$39583657eb2a7027 extends $33da15cd88dce4fa$export$823c745ae0673c5e {
    constructor(message, details = null){
        super(message, "AuthPKCEGrantCodeExchangeError", 500);
        this.details = null;
        this.details = details;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        };
    }
}
class $33da15cd88dce4fa$export$2423b763f68be1b4 extends $33da15cd88dce4fa$export$823c745ae0673c5e {
    constructor(message, status){
        super(message, "AuthRetryableFetchError", status);
    }
}
function $33da15cd88dce4fa$export$a77af358da5fb874(error) {
    return $33da15cd88dce4fa$export$cde1786a482f9a1c(error) && error.name === "AuthRetryableFetchError";
}
class $33da15cd88dce4fa$export$b034076aa04913a6 extends $33da15cd88dce4fa$export$823c745ae0673c5e {
    constructor(message, status, reasons){
        super(message, "AuthWeakPasswordError", status);
        this.reasons = reasons;
    }
}
function $33da15cd88dce4fa$export$dac36143fd8a46ef(error) {
    return $33da15cd88dce4fa$export$cde1786a482f9a1c(error) && error.name === "AuthWeakPasswordError";
}


var $0f442b898bba3d15$var$__rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const $0f442b898bba3d15$var$_getErrorMessage = (err)=>err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const $0f442b898bba3d15$var$NETWORK_ERROR_CODES = [
    502,
    503,
    504
];
async function $0f442b898bba3d15$var$handleError(error) {
    if (!(0, $48c7760cd45d5801$export$e8ad6599be1036a7)(error)) throw new (0, $33da15cd88dce4fa$export$2423b763f68be1b4)($0f442b898bba3d15$var$_getErrorMessage(error), 0);
    if ($0f442b898bba3d15$var$NETWORK_ERROR_CODES.includes(error.status)) // status in 500...599 range - server had an error, request might be retryed.
    throw new (0, $33da15cd88dce4fa$export$2423b763f68be1b4)($0f442b898bba3d15$var$_getErrorMessage(error), error.status);
    let data;
    try {
        data = await error.json();
    } catch (e) {
        throw new (0, $33da15cd88dce4fa$export$f7559805d4a50078)($0f442b898bba3d15$var$_getErrorMessage(e), e);
    }
    if (typeof data === "object" && data && typeof data.weak_password === "object" && data.weak_password && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.reasons.reduce((a, i)=>a && typeof i === "string", true)) throw new (0, $33da15cd88dce4fa$export$b034076aa04913a6)($0f442b898bba3d15$var$_getErrorMessage(data), error.status, data.weak_password.reasons);
    throw new (0, $33da15cd88dce4fa$export$45fde0b55b14f37b)($0f442b898bba3d15$var$_getErrorMessage(data), error.status || 500);
}
const $0f442b898bba3d15$var$_getRequestParams = (method, options, parameters, body)=>{
    const params = {
        method: method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET") return params;
    params.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
async function $0f442b898bba3d15$export$8969b3850ca2cdfd(fetcher, method, url, options) {
    var _a;
    const headers = Object.assign({}, options === null || options === void 0 ? void 0 : options.headers);
    if (options === null || options === void 0 ? void 0 : options.jwt) headers["Authorization"] = `Bearer ${options.jwt}`;
    const qs = (_a = options === null || options === void 0 ? void 0 : options.query) !== null && _a !== void 0 ? _a : {};
    if (options === null || options === void 0 ? void 0 : options.redirectTo) qs["redirect_to"] = options.redirectTo;
    const queryString = Object.keys(qs).length ? "?" + new URLSearchParams(qs).toString() : "";
    const data = await $0f442b898bba3d15$var$_handleRequest(fetcher, method, url + queryString, {
        headers: headers,
        noResolveJson: options === null || options === void 0 ? void 0 : options.noResolveJson
    }, {}, options === null || options === void 0 ? void 0 : options.body);
    return (options === null || options === void 0 ? void 0 : options.xform) ? options === null || options === void 0 ? void 0 : options.xform(data) : {
        data: Object.assign({}, data),
        error: null
    };
}
async function $0f442b898bba3d15$var$_handleRequest(fetcher, method, url, options, parameters, body) {
    const requestParams = $0f442b898bba3d15$var$_getRequestParams(method, options, parameters, body);
    let result;
    try {
        result = await fetcher(url, requestParams);
    } catch (e) {
        console.error(e);
        // fetch failed, likely due to a network or CORS error
        throw new (0, $33da15cd88dce4fa$export$2423b763f68be1b4)($0f442b898bba3d15$var$_getErrorMessage(e), 0);
    }
    if (!result.ok) await $0f442b898bba3d15$var$handleError(result);
    if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
    try {
        return await result.json();
    } catch (e) {
        await $0f442b898bba3d15$var$handleError(e);
    }
}
function $0f442b898bba3d15$export$273fe4673a018c2e(data) {
    var _a;
    let session = null;
    if ($0f442b898bba3d15$var$hasSession(data)) {
        session = Object.assign({}, data);
        if (!data.expires_at) session.expires_at = (0, $48c7760cd45d5801$export$e02d0a488392f690)(data.expires_in);
    }
    const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return {
        data: {
            session: session,
            user: user
        },
        error: null
    };
}
function $0f442b898bba3d15$export$db83aade1c2922c7(data) {
    const response = $0f442b898bba3d15$export$273fe4673a018c2e(data);
    if (!response.error && data.weak_password && typeof data.weak_password === "object" && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.message && typeof data.weak_password.message === "string" && data.weak_password.reasons.reduce((a, i)=>a && typeof i === "string", true)) response.data.weak_password = data.weak_password;
    return response;
}
function $0f442b898bba3d15$export$e20f488897843593(data) {
    var _a;
    const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return {
        data: {
            user: user
        },
        error: null
    };
}
function $0f442b898bba3d15$export$b04785c46dcd8f8b(data) {
    return {
        data: data,
        error: null
    };
}
function $0f442b898bba3d15$export$f5eaa950605b2146(data) {
    const { action_link: action_link, email_otp: email_otp, hashed_token: hashed_token, redirect_to: redirect_to, verification_type: verification_type } = data, rest = $0f442b898bba3d15$var$__rest(data, [
        "action_link",
        "email_otp",
        "hashed_token",
        "redirect_to",
        "verification_type"
    ]);
    const properties = {
        action_link: action_link,
        email_otp: email_otp,
        hashed_token: hashed_token,
        redirect_to: redirect_to,
        verification_type: verification_type
    };
    const user = Object.assign({}, rest);
    return {
        data: {
            properties: properties,
            user: user
        },
        error: null
    };
}
function $0f442b898bba3d15$export$7aed01df6e045e31(data) {
    return data;
}
/**
 * hasSession checks if the response object contains a valid session
 * @param data A response object
 * @returns true if a session is in the response
 */ function $0f442b898bba3d15$var$hasSession(data) {
    return data.access_token && data.refresh_token && data.expires_in;
}




var $21111cc734990d8d$var$__rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
class $21111cc734990d8d$export$2e2bcd8739ae039 {
    constructor({ url: url = "", headers: headers = {}, fetch: fetch }){
        this.url = url;
        this.headers = headers;
        this.fetch = (0, $48c7760cd45d5801$export$98d92b1aa79f8cc7)(fetch);
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        };
    }
    /**
     * Removes a logged-in session.
     * @param jwt A valid, logged-in JWT.
     * @param scope The logout sope.
     */ async signOut(jwt, scope = "global") {
        try {
            await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/logout?scope=${scope}`, {
                headers: this.headers,
                jwt: jwt,
                noResolveJson: true
            });
            return {
                data: null,
                error: null
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: null,
                error: error
            };
            throw error;
        }
    }
    /**
     * Sends an invite link to an email address.
     * @param email The email address of the user.
     * @param options Additional options to be included when inviting.
     */ async inviteUserByEmail(email, options = {}) {
        try {
            return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: email,
                    data: options.data
                },
                headers: this.headers,
                redirectTo: options.redirectTo,
                xform: (0, $0f442b898bba3d15$export$e20f488897843593)
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Generates email links and OTPs to be sent via a custom email provider.
     * @param email The user's email.
     * @param options.password User password. For signup only.
     * @param options.data Optional user metadata. For signup only.
     * @param options.redirectTo The redirect url which should be appended to the generated link
     */ async generateLink(params) {
        try {
            const { options: options } = params, rest = $21111cc734990d8d$var$__rest(params, [
                "options"
            ]);
            const body = Object.assign(Object.assign({}, rest), options);
            if ("newEmail" in rest) {
                // replace newEmail with new_email in request body
                body.new_email = rest === null || rest === void 0 ? void 0 : rest.newEmail;
                delete body["newEmail"];
            }
            return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: body,
                headers: this.headers,
                xform: (0, $0f442b898bba3d15$export$f5eaa950605b2146),
                redirectTo: options === null || options === void 0 ? void 0 : options.redirectTo
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    properties: null,
                    user: null
                },
                error: error
            };
            throw error;
        }
    }
    // User Admin API
    /**
     * Creates a new user.
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async createUser(attributes) {
        try {
            return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/admin/users`, {
                body: attributes,
                headers: this.headers,
                xform: (0, $0f442b898bba3d15$export$e20f488897843593)
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Get a list of users.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
     */ async listUsers(params) {
        var _a, _b, _c, _d, _e, _f, _g;
        try {
            const pagination = {
                nextPage: null,
                lastPage: 0,
                total: 0
            };
            const response = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: true,
                query: {
                    page: (_b = (_a = params === null || params === void 0 ? void 0 : params.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "",
                    per_page: (_d = (_c = params === null || params === void 0 ? void 0 : params.perPage) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""
                },
                xform: (0, $0f442b898bba3d15$export$7aed01df6e045e31)
            });
            if (response.error) throw response.error;
            const users = await response.json();
            const total = (_e = response.headers.get("x-total-count")) !== null && _e !== void 0 ? _e : 0;
            const links = (_g = (_f = response.headers.get("link")) === null || _f === void 0 ? void 0 : _f.split(",")) !== null && _g !== void 0 ? _g : [];
            if (links.length > 0) {
                links.forEach((link)=>{
                    const page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
                    const rel = JSON.parse(link.split(";")[1].split("=")[1]);
                    pagination[`${rel}Page`] = page;
                });
                pagination.total = parseInt(total);
            }
            return {
                data: Object.assign(Object.assign({}, users), pagination),
                error: null
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    users: []
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Get user by id.
     *
     * @param uid The user's unique identifier
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async getUserById(uid) {
        try {
            return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "GET", `${this.url}/admin/users/${uid}`, {
                headers: this.headers,
                xform: (0, $0f442b898bba3d15$export$e20f488897843593)
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Updates the user data.
     *
     * @param attributes The data you want to update.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async updateUserById(uid, attributes) {
        try {
            return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "PUT", `${this.url}/admin/users/${uid}`, {
                body: attributes,
                headers: this.headers,
                xform: (0, $0f442b898bba3d15$export$e20f488897843593)
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Delete a user. Requires a `service_role` key.
     *
     * @param id The user id you want to remove.
     * @param shouldSoftDelete If true, then the user will be soft-deleted (setting `deleted_at` to the current timestamp and disabling their account while preserving their data) from the auth schema.
     * Defaults to false for backward compatibility.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async deleteUser(id, shouldSoftDelete = false) {
        try {
            return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "DELETE", `${this.url}/admin/users/${id}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: shouldSoftDelete
                },
                xform: (0, $0f442b898bba3d15$export$e20f488897843593)
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null
                },
                error: error
            };
            throw error;
        }
    }
    async _listFactors(params) {
        try {
            const { data: data, error: error } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "GET", `${this.url}/admin/users/${params.userId}/factors`, {
                headers: this.headers,
                xform: (factors)=>{
                    return {
                        data: {
                            factors: factors
                        },
                        error: null
                    };
                }
            });
            return {
                data: data,
                error: error
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: null,
                error: error
            };
            throw error;
        }
    }
    async _deleteFactor(params) {
        try {
            const data = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "DELETE", `${this.url}/admin/users/${params.userId}/factors/${params.id}`, {
                headers: this.headers
            });
            return {
                data: data,
                error: null
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: null,
                error: error
            };
            throw error;
        }
    }
}



// Generated by genversion.
const $b3a07d5403ba5b66$export$83d89fbfd8236492 = "0.0.0";


const $71c661f15893779f$export$7fedf552187f0c3d = "http://localhost:9999";
const $71c661f15893779f$export$86880b4b2e1a2384 = "supabase.auth.token";
const $71c661f15893779f$export$2f9161bad044dacb = "";
const $71c661f15893779f$export$88a84136db6a4b64 = {
    "X-Client-Info": `gotrue-js/${(0, $b3a07d5403ba5b66$export$83d89fbfd8236492)}`
};
const $71c661f15893779f$export$7d4b3a66850dd9bd = 10; // in seconds
const $71c661f15893779f$export$5615c708618ee858 = {
    MAX_RETRIES: 10,
    RETRY_INTERVAL: 2
};






const $eb72404a037f6347$export$bba7b6c94612d04b = {
    getItem: (key)=>{
        if (!(0, $48c7760cd45d5801$export$9ec034ee80211814)()) return null;
        return globalThis.localStorage.getItem(key);
    },
    setItem: (key, value)=>{
        if (!(0, $48c7760cd45d5801$export$9ec034ee80211814)()) return;
        globalThis.localStorage.setItem(key, value);
    },
    removeItem: (key)=>{
        if (!(0, $48c7760cd45d5801$export$9ec034ee80211814)()) return;
        globalThis.localStorage.removeItem(key);
    }
};
function $eb72404a037f6347$export$d791f66d7e5710cf(store = {}) {
    return {
        getItem: (key)=>{
            return store[key] || null;
        },
        setItem: (key, value)=>{
            store[key] = value;
        },
        removeItem: (key)=>{
            delete store[key];
        }
    };
}


/**
 * https://mathiasbynens.be/notes/globalthis
 */ function $2d44f8ec28ac63fb$export$ad067ce270531206() {
    if (typeof globalThis === "object") return;
    try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function() {
                return this;
            },
            configurable: true
        });
        // @ts-expect-error 'Allow access to magic'
        __magic__.globalThis = __magic__;
        // @ts-expect-error 'Allow access to magic'
        delete Object.prototype.__magic__;
    } catch (e) {
        if (typeof self !== "undefined") // @ts-expect-error 'Allow access to globals'
        self.globalThis = self;
    }
}




const $1bd8ffc1afa4c1b9$export$e368aba7747330f2 = {
    /**
     * @experimental
     */ debug: !!(globalThis && (0, $48c7760cd45d5801$export$9ec034ee80211814)() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class $1bd8ffc1afa4c1b9$export$23e9464cc010dff9 extends Error {
    constructor(message){
        super(message);
        this.isAcquireTimeout = true;
    }
}
class $1bd8ffc1afa4c1b9$export$4aa56776043a4631 extends $1bd8ffc1afa4c1b9$export$23e9464cc010dff9 {
}
async function $1bd8ffc1afa4c1b9$export$f4ff21938fb7af3c(name, acquireTimeout, fn) {
    if ($1bd8ffc1afa4c1b9$export$e368aba7747330f2.debug) console.log("@supabase/gotrue-js: navigatorLock: acquire lock", name, acquireTimeout);
    const abortController = new globalThis.AbortController();
    if (acquireTimeout > 0) setTimeout(()=>{
        abortController.abort();
        if ($1bd8ffc1afa4c1b9$export$e368aba7747330f2.debug) console.log("@supabase/gotrue-js: navigatorLock acquire timed out", name);
    }, acquireTimeout);
    // MDN article: https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request
    return await globalThis.navigator.locks.request(name, acquireTimeout === 0 ? {
        mode: "exclusive",
        ifAvailable: true
    } : {
        mode: "exclusive",
        signal: abortController.signal
    }, async (lock)=>{
        if (lock) {
            if ($1bd8ffc1afa4c1b9$export$e368aba7747330f2.debug) console.log("@supabase/gotrue-js: navigatorLock: acquired", name, lock.name);
            try {
                return await fn();
            } finally{
                if ($1bd8ffc1afa4c1b9$export$e368aba7747330f2.debug) console.log("@supabase/gotrue-js: navigatorLock: released", name, lock.name);
            }
        } else if (acquireTimeout === 0) {
            if ($1bd8ffc1afa4c1b9$export$e368aba7747330f2.debug) console.log("@supabase/gotrue-js: navigatorLock: not immediately available", name);
            throw new $1bd8ffc1afa4c1b9$export$4aa56776043a4631(`Acquiring an exclusive Navigator LockManager lock "${name}" immediately failed`);
        } else {
            if ($1bd8ffc1afa4c1b9$export$e368aba7747330f2.debug) try {
                const result = await globalThis.navigator.locks.query();
                console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(result, null, "  "));
            } catch (e) {
                console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
            }
            // Browser is not following the Navigator LockManager spec, it
            // returned a null lock when we didn't use ifAvailable. So we can
            // pretend the lock is acquired in the name of backward compatibility
            // and user experience and just run the function.
            console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
            return await fn();
        }
    });
}


(0, $2d44f8ec28ac63fb$export$ad067ce270531206)(); // Make "globalThis" available
const $87aa3bd4a69c4df8$var$DEFAULT_OPTIONS = {
    url: (0, $71c661f15893779f$export$7fedf552187f0c3d),
    storageKey: (0, $71c661f15893779f$export$86880b4b2e1a2384),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    headers: (0, $71c661f15893779f$export$88a84136db6a4b64),
    flowType: "implicit",
    debug: false
};
/** Current session will be checked for refresh at this interval. */ const $87aa3bd4a69c4df8$var$AUTO_REFRESH_TICK_DURATION = 30000;
/**
 * A token refresh will be attempted this many ticks before the current session expires. */ const $87aa3bd4a69c4df8$var$AUTO_REFRESH_TICK_THRESHOLD = 3;
async function $87aa3bd4a69c4df8$var$lockNoOp(name, acquireTimeout, fn) {
    return await fn();
}
class $87aa3bd4a69c4df8$export$2e2bcd8739ae039 {
    /**
     * Create a new client for use in the browser.
     */ constructor(options){
        var _a, _b;
        this.memoryStorage = null;
        this.stateChangeEmitters = new Map();
        this.autoRefreshTicker = null;
        this.visibilityChangedCallback = null;
        this.refreshingDeferred = null;
        /**
         * Keeps track of the async client initialization.
         * When null or not yet resolved the auth state is `unknown`
         * Once resolved the the auth state is known and it's save to call any further client methods.
         * Keep extra care to never reject or throw uncaught errors
         */ this.initializePromise = null;
        this.detectSessionInUrl = true;
        this.lockAcquired = false;
        this.pendingInLock = [];
        /**
         * Used to broadcast state change events to other tabs listening.
         */ this.broadcastChannel = null;
        this.logger = console.log;
        this.instanceID = $87aa3bd4a69c4df8$export$2e2bcd8739ae039.nextInstanceID;
        $87aa3bd4a69c4df8$export$2e2bcd8739ae039.nextInstanceID += 1;
        if (this.instanceID > 0 && (0, $48c7760cd45d5801$export$4e09c449d6c407f7)()) console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const settings = Object.assign(Object.assign({}, $87aa3bd4a69c4df8$var$DEFAULT_OPTIONS), options);
        this.logDebugMessages = !!settings.debug;
        if (typeof settings.debug === "function") this.logger = settings.debug;
        this.persistSession = settings.persistSession;
        this.storageKey = settings.storageKey;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.admin = new (0, $21111cc734990d8d$export$2e2bcd8739ae039)({
            url: settings.url,
            headers: settings.headers,
            fetch: settings.fetch
        });
        this.url = settings.url;
        this.headers = settings.headers;
        this.fetch = (0, $48c7760cd45d5801$export$98d92b1aa79f8cc7)(settings.fetch);
        this.lock = settings.lock || $87aa3bd4a69c4df8$var$lockNoOp;
        this.detectSessionInUrl = settings.detectSessionInUrl;
        this.flowType = settings.flowType;
        if (settings.lock) this.lock = settings.lock;
        else if ((0, $48c7760cd45d5801$export$4e09c449d6c407f7)() && ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.locks)) this.lock = (0, $1bd8ffc1afa4c1b9$export$f4ff21938fb7af3c);
        else this.lock = $87aa3bd4a69c4df8$var$lockNoOp;
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        };
        if (this.persistSession) {
            if (settings.storage) this.storage = settings.storage;
            else if ((0, $48c7760cd45d5801$export$9ec034ee80211814)()) this.storage = (0, $eb72404a037f6347$export$bba7b6c94612d04b);
            else {
                this.memoryStorage = {};
                this.storage = (0, $eb72404a037f6347$export$d791f66d7e5710cf)(this.memoryStorage);
            }
        } else {
            this.memoryStorage = {};
            this.storage = (0, $eb72404a037f6347$export$d791f66d7e5710cf)(this.memoryStorage);
        }
        if ((0, $48c7760cd45d5801$export$4e09c449d6c407f7)() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
            } catch (e) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
            }
            (_b = this.broadcastChannel) === null || _b === void 0 || _b.addEventListener("message", async (event)=>{
                this._debug("received broadcast notification from other tab or client", event);
                await this._notifyAllSubscribers(event.data.event, event.data.session, false); // broadcast = false so we don't get an endless loop of messages
            });
        }
        this.initialize();
    }
    _debug(...args) {
        if (this.logDebugMessages) this.logger(`GoTrueClient@${this.instanceID} (${(0, $b3a07d5403ba5b66$export$83d89fbfd8236492)}) ${new Date().toISOString()}`, ...args);
        return this;
    }
    /**
     * Initializes the client session either from the url or from storage.
     * This method is automatically called when instantiating the client, but should also be called
     * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
     */ async initialize() {
        if (this.initializePromise) return await this.initializePromise;
        this.initializePromise = (async ()=>{
            return await this._acquireLock(-1, async ()=>{
                return await this._initialize();
            });
        })();
        return await this.initializePromise;
    }
    /**
     * IMPORTANT:
     * 1. Never throw in this method, as it is called from the constructor
     * 2. Never return a session from this method as it would be cached over
     *    the whole lifetime of the client
     */ async _initialize() {
        try {
            const isPKCEFlow = (0, $48c7760cd45d5801$export$4e09c449d6c407f7)() ? await this._isPKCEFlow() : false;
            this._debug("#_initialize()", "begin", "is PKCE flow", isPKCEFlow);
            if (isPKCEFlow || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
                const { data: data, error: error } = await this._getSessionFromURL(isPKCEFlow);
                if (error) {
                    this._debug("#_initialize()", "error detecting session from URL", error);
                    // hacky workaround to keep the existing session if there's an error returned from identity linking
                    // TODO: once error codes are ready, we should match against it instead of the message
                    if ((error === null || error === void 0 ? void 0 : error.message) === "Identity is already linked" || (error === null || error === void 0 ? void 0 : error.message) === "Identity is already linked to another user") return {
                        error: error
                    };
                    // failed login attempt via url,
                    // remove old session as in verifyOtp, signUp and signInWith*
                    await this._removeSession();
                    return {
                        error: error
                    };
                }
                const { session: session, redirectType: redirectType } = data;
                this._debug("#_initialize()", "detected session in URL", session, "redirect type", redirectType);
                await this._saveSession(session);
                setTimeout(async ()=>{
                    if (redirectType === "recovery") await this._notifyAllSubscribers("PASSWORD_RECOVERY", session);
                    else await this._notifyAllSubscribers("SIGNED_IN", session);
                }, 0);
                return {
                    error: null
                };
            }
            // no login attempt via callback url try to recover session from storage
            await this._recoverAndRefresh();
            return {
                error: null
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                error: error
            };
            return {
                error: new (0, $33da15cd88dce4fa$export$f7559805d4a50078)("Unexpected error during initialization", error)
            };
        } finally{
            await this._handleVisibilityChange();
            this._debug("#_initialize()", "end");
        }
    }
    /**
     * Creates a new user.
     *
     * Be aware that if a user account exists in the system you may get back an
     * error message that attempts to hide this information from the user.
     * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
     *
     * @returns A logged-in session if the server has "autoconfirm" ON
     * @returns A user if the server has "autoconfirm" OFF
     */ async signUp(credentials) {
        var _a, _b, _c;
        try {
            await this._removeSession();
            let res;
            if ("email" in credentials) {
                const { email: email, password: password, options: options } = credentials;
                let codeChallenge = null;
                let codeChallengeMethod = null;
                if (this.flowType === "pkce") {
                    const codeVerifier = (0, $48c7760cd45d5801$export$b6c3b8498f152f15)();
                    await (0, $48c7760cd45d5801$export$e82c36d29078a87f)(this.storage, `${this.storageKey}-code-verifier`, codeVerifier);
                    codeChallenge = await (0, $48c7760cd45d5801$export$eb79e16bb8189148)(codeVerifier);
                    codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
                }
                res = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                    body: {
                        email: email,
                        password: password,
                        data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        },
                        code_challenge: codeChallenge,
                        code_challenge_method: codeChallengeMethod
                    },
                    xform: (0, $0f442b898bba3d15$export$273fe4673a018c2e)
                });
            } else if ("phone" in credentials) {
                const { phone: phone, password: password, options: options } = credentials;
                res = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: phone,
                        password: password,
                        data: (_b = options === null || options === void 0 ? void 0 : options.data) !== null && _b !== void 0 ? _b : {},
                        channel: (_c = options === null || options === void 0 ? void 0 : options.channel) !== null && _c !== void 0 ? _c : "sms",
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    xform: (0, $0f442b898bba3d15$export$273fe4673a018c2e)
                });
            } else throw new (0, $33da15cd88dce4fa$export$9ef583f0381b4cc)("You must provide either an email or phone number and a password");
            const { data: data, error: error } = res;
            if (error || !data) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            const session = data.session;
            const user = data.user;
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", session);
            }
            return {
                data: {
                    user: user,
                    session: session
                },
                error: null
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Log in an existing user with an email and password or phone and password.
     *
     * Be aware that you may get back an error message that will not distinguish
     * between the cases where the account does not exist or that the
     * email/phone and password combination is wrong or that the account can only
     * be accessed via social login.
     */ async signInWithPassword(credentials) {
        try {
            await this._removeSession();
            let res;
            if ("email" in credentials) {
                const { email: email, password: password, options: options } = credentials;
                res = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: email,
                        password: password,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    xform: (0, $0f442b898bba3d15$export$db83aade1c2922c7)
                });
            } else if ("phone" in credentials) {
                const { phone: phone, password: password, options: options } = credentials;
                res = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: phone,
                        password: password,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    xform: (0, $0f442b898bba3d15$export$db83aade1c2922c7)
                });
            } else throw new (0, $33da15cd88dce4fa$export$9ef583f0381b4cc)("You must provide either an email or phone number and a password");
            const { data: data, error: error } = res;
            if (error) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            else if (!data || !data.session || !data.user) return {
                data: {
                    user: null,
                    session: null
                },
                error: new (0, $33da15cd88dce4fa$export$7e277b620449c1b4)()
            };
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", data.session);
            }
            return {
                data: Object.assign({
                    user: data.user,
                    session: data.session
                }, data.weak_password ? {
                    weakPassword: data.weak_password
                } : null),
                error: error
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Log in an existing user via a third-party provider.
     * This method supports the PKCE flow.
     */ async signInWithOAuth(credentials) {
        var _a, _b, _c, _d;
        await this._removeSession();
        return await this._handleProviderSignIn(credentials.provider, {
            redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
            scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
            queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
            skipBrowserRedirect: (_d = credentials.options) === null || _d === void 0 ? void 0 : _d.skipBrowserRedirect
        });
    }
    /**
     * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
     */ async exchangeCodeForSession(authCode) {
        await this.initializePromise;
        return this._acquireLock(-1, async ()=>{
            return this._exchangeCodeForSession(authCode);
        });
    }
    async _exchangeCodeForSession(authCode) {
        const storageItem = await (0, $48c7760cd45d5801$export$ba6fcb7c333d32c0)(this.storage, `${this.storageKey}-code-verifier`);
        const [codeVerifier, redirectType] = (storageItem !== null && storageItem !== void 0 ? storageItem : "").split("/");
        const { data: data, error: error } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
            headers: this.headers,
            body: {
                auth_code: authCode,
                code_verifier: codeVerifier
            },
            xform: (0, $0f442b898bba3d15$export$273fe4673a018c2e)
        });
        await (0, $48c7760cd45d5801$export$d35c645d585317ec)(this.storage, `${this.storageKey}-code-verifier`);
        if (error) return {
            data: {
                user: null,
                session: null,
                redirectType: null
            },
            error: error
        };
        else if (!data || !data.session || !data.user) return {
            data: {
                user: null,
                session: null,
                redirectType: null
            },
            error: new (0, $33da15cd88dce4fa$export$7e277b620449c1b4)()
        };
        if (data.session) {
            await this._saveSession(data.session);
            await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return {
            data: Object.assign(Object.assign({}, data), {
                redirectType: redirectType !== null && redirectType !== void 0 ? redirectType : null
            }),
            error: error
        };
    }
    /**
     * Allows signing in with an OIDC ID token. The authentication provider used
     * should be enabled and configured.
     */ async signInWithIdToken(credentials) {
        await this._removeSession();
        try {
            const { options: options, provider: provider, token: token, access_token: access_token, nonce: nonce } = credentials;
            const res = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: provider,
                    id_token: token,
                    access_token: access_token,
                    nonce: nonce,
                    gotrue_meta_security: {
                        captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                    }
                },
                xform: (0, $0f442b898bba3d15$export$273fe4673a018c2e)
            });
            const { data: data, error: error } = res;
            if (error) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            else if (!data || !data.session || !data.user) return {
                data: {
                    user: null,
                    session: null
                },
                error: new (0, $33da15cd88dce4fa$export$7e277b620449c1b4)()
            };
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", data.session);
            }
            return {
                data: data,
                error: error
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Log in a user using magiclink or a one-time password (OTP).
     *
     * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
     * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
     * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
     *
     * Be aware that you may get back an error message that will not distinguish
     * between the cases where the account does not exist or, that the account
     * can only be accessed via social login.
     *
     * Do note that you will need to configure a Whatsapp sender on Twilio
     * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
     * channel is not supported on other providers
     * at this time.
     * This method supports PKCE when an email is passed.
     */ async signInWithOtp(credentials) {
        var _a, _b, _c, _d, _e;
        try {
            await this._removeSession();
            if ("email" in credentials) {
                const { email: email, options: options } = credentials;
                let codeChallenge = null;
                let codeChallengeMethod = null;
                if (this.flowType === "pkce") {
                    const codeVerifier = (0, $48c7760cd45d5801$export$b6c3b8498f152f15)();
                    await (0, $48c7760cd45d5801$export$e82c36d29078a87f)(this.storage, `${this.storageKey}-code-verifier`, codeVerifier);
                    codeChallenge = await (0, $48c7760cd45d5801$export$eb79e16bb8189148)(codeVerifier);
                    codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
                }
                const { error: error } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: email,
                        data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                        create_user: (_b = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _b !== void 0 ? _b : true,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        },
                        code_challenge: codeChallenge,
                        code_challenge_method: codeChallengeMethod
                    },
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: error
                };
            }
            if ("phone" in credentials) {
                const { phone: phone, options: options } = credentials;
                const { data: data, error: error } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: phone,
                        data: (_c = options === null || options === void 0 ? void 0 : options.data) !== null && _c !== void 0 ? _c : {},
                        create_user: (_d = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _d !== void 0 ? _d : true,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        },
                        channel: (_e = options === null || options === void 0 ? void 0 : options.channel) !== null && _e !== void 0 ? _e : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: data === null || data === void 0 ? void 0 : data.message_id
                    },
                    error: error
                };
            }
            throw new (0, $33da15cd88dce4fa$export$9ef583f0381b4cc)("You must provide either an email or phone number.");
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
     */ async verifyOtp(params) {
        var _a, _b;
        try {
            if (params.type !== "email_change" && params.type !== "phone_change") // we don't want to remove the authenticated session if the user is performing an email_change or phone_change verification
            await this._removeSession();
            let redirectTo = undefined;
            let captchaToken = undefined;
            if ("options" in params) {
                redirectTo = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo;
                captchaToken = (_b = params.options) === null || _b === void 0 ? void 0 : _b.captchaToken;
            }
            const { data: data, error: error } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, params), {
                    gotrue_meta_security: {
                        captcha_token: captchaToken
                    }
                }),
                redirectTo: redirectTo,
                xform: (0, $0f442b898bba3d15$export$273fe4673a018c2e)
            });
            if (error) throw error;
            if (!data) throw new Error("An error occurred on token verification.");
            const session = data.session;
            const user = data.user;
            if (session === null || session === void 0 ? void 0 : session.access_token) {
                await this._saveSession(session);
                await this._notifyAllSubscribers(params.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", session);
            }
            return {
                data: {
                    user: user,
                    session: session
                },
                error: null
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Attempts a single-sign on using an enterprise Identity Provider. A
     * successful SSO attempt will redirect the current page to the identity
     * provider authorization page. The redirect URL is implementation and SSO
     * protocol specific.
     *
     * You can use it by providing a SSO domain. Typically you can extract this
     * domain by asking users for their email address. If this domain is
     * registered on the Auth instance the redirect will use that organization's
     * currently active SSO Identity Provider for the login.
     *
     * If you have built an organization-specific login page, you can use the
     * organization's SSO Identity Provider UUID directly instead.
     */ async signInWithSSO(params) {
        var _a, _b, _c;
        try {
            await this._removeSession();
            let codeChallenge = null;
            let codeChallengeMethod = null;
            if (this.flowType === "pkce") {
                const codeVerifier = (0, $48c7760cd45d5801$export$b6c3b8498f152f15)();
                await (0, $48c7760cd45d5801$export$e82c36d29078a87f)(this.storage, `${this.storageKey}-code-verifier`, codeVerifier);
                codeChallenge = await (0, $48c7760cd45d5801$export$eb79e16bb8189148)(codeVerifier);
                codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
            }
            return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in params ? {
                    provider_id: params.providerId
                } : null), "domain" in params ? {
                    domain: params.domain
                } : null), {
                    redirect_to: (_b = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo) !== null && _b !== void 0 ? _b : undefined
                }), ((_c = params === null || params === void 0 ? void 0 : params.options) === null || _c === void 0 ? void 0 : _c.captchaToken) ? {
                    gotrue_meta_security: {
                        captcha_token: params.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: true,
                    code_challenge: codeChallenge,
                    code_challenge_method: codeChallengeMethod
                }),
                headers: this.headers,
                xform: (0, $0f442b898bba3d15$export$b04785c46dcd8f8b)
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: null,
                error: error
            };
            throw error;
        }
    }
    /**
     * Sends a reauthentication OTP to the user's email or phone number.
     * Requires the user to be signed-in.
     */ async reauthenticate() {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._reauthenticate();
        });
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async (result)=>{
                const { data: { session: session }, error: sessionError } = result;
                if (sessionError) throw sessionError;
                if (!session) throw new (0, $33da15cd88dce4fa$export$403b3fc0d3ad5f0c)();
                const { error: error } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: session.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: error
                };
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
     */ async resend(credentials) {
        try {
            if (credentials.type != "email_change" && credentials.type != "phone_change") await this._removeSession();
            const endpoint = `${this.url}/resend`;
            if ("email" in credentials) {
                const { email: email, type: type, options: options } = credentials;
                const { error: error } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", endpoint, {
                    headers: this.headers,
                    body: {
                        email: email,
                        type: type,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: error
                };
            } else if ("phone" in credentials) {
                const { phone: phone, type: type, options: options } = credentials;
                const { data: data, error: error } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", endpoint, {
                    headers: this.headers,
                    body: {
                        phone: phone,
                        type: type,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: data === null || data === void 0 ? void 0 : data.message_id
                    },
                    error: error
                };
            }
            throw new (0, $33da15cd88dce4fa$export$9ef583f0381b4cc)("You must provide either an email or phone number and a type");
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Returns the session, refreshing it if necessary.
     * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
     */ async getSession() {
        await this.initializePromise;
        return this._acquireLock(-1, async ()=>{
            return this._useSession(async (result)=>{
                return result;
            });
        });
    }
    /**
     * Acquires a global lock based on the storage key.
     */ async _acquireLock(acquireTimeout, fn) {
        this._debug("#_acquireLock", "begin", acquireTimeout);
        try {
            if (this.lockAcquired) {
                const last = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
                const result = (async ()=>{
                    await last;
                    return await fn();
                })();
                this.pendingInLock.push((async ()=>{
                    try {
                        await result;
                    } catch (e) {
                    // we just care if it finished
                    }
                })());
                return result;
            }
            return await this.lock(`lock:${this.storageKey}`, acquireTimeout, async ()=>{
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = true;
                    const result = fn();
                    this.pendingInLock.push((async ()=>{
                        try {
                            await result;
                        } catch (e) {
                        // we just care if it finished
                        }
                    })());
                    await result;
                    // keep draining the queue until there's nothing to wait on
                    while(this.pendingInLock.length){
                        const waitOn = [
                            ...this.pendingInLock
                        ];
                        await Promise.all(waitOn);
                        this.pendingInLock.splice(0, waitOn.length);
                    }
                    return await result;
                } finally{
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
                    this.lockAcquired = false;
                }
            });
        } finally{
            this._debug("#_acquireLock", "end");
        }
    }
    /**
     * Use instead of {@link #getSession} inside the library. It is
     * semantically usually what you want, as getting a session involves some
     * processing afterwards that requires only one client operating on the
     * session at once across multiple tabs or processes.
     */ async _useSession(fn) {
        this._debug("#_useSession", "begin");
        try {
            // the use of __loadSession here is the only correct use of the function!
            const result = await this.__loadSession();
            return await fn(result);
        } finally{
            this._debug("#_useSession", "end");
        }
    }
    /**
     * NEVER USE DIRECTLY!
     *
     * Always use {@link #_useSession}.
     */ async __loadSession() {
        this._debug("#__loadSession()", "begin");
        if (!this.lockAcquired) this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let currentSession = null;
            const maybeSession = await (0, $48c7760cd45d5801$export$ba6fcb7c333d32c0)(this.storage, this.storageKey);
            this._debug("#getSession()", "session from storage", maybeSession);
            if (maybeSession !== null) {
                if (this._isValidSession(maybeSession)) currentSession = maybeSession;
                else {
                    this._debug("#getSession()", "session from storage is not valid");
                    await this._removeSession();
                }
            }
            if (!currentSession) return {
                data: {
                    session: null
                },
                error: null
            };
            const hasExpired = currentSession.expires_at ? currentSession.expires_at <= Date.now() / 1000 : false;
            this._debug("#__loadSession()", `session has${hasExpired ? "" : " not"} expired`, "expires_at", currentSession.expires_at);
            if (!hasExpired) return {
                data: {
                    session: currentSession
                },
                error: null
            };
            const { session: session, error: error } = await this._callRefreshToken(currentSession.refresh_token);
            if (error) return {
                data: {
                    session: null
                },
                error: error
            };
            return {
                data: {
                    session: session
                },
                error: null
            };
        } finally{
            this._debug("#__loadSession()", "end");
        }
    }
    /**
     * Gets the current user details if there is an existing session.
     * @param jwt Takes in an optional access token jwt. If no jwt is provided, getUser() will attempt to get the jwt from the current session.
     */ async getUser(jwt) {
        if (jwt) return await this._getUser(jwt);
        await this.initializePromise;
        return this._acquireLock(-1, async ()=>{
            return await this._getUser();
        });
    }
    async _getUser(jwt) {
        try {
            if (jwt) return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: jwt,
                xform: (0, $0f442b898bba3d15$export$e20f488897843593)
            });
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data: data, error: error } = result;
                if (error) throw error;
                return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : undefined,
                    xform: (0, $0f442b898bba3d15$export$e20f488897843593)
                });
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Updates user data for a logged in user.
     */ async updateUser(attributes, options = {}) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._updateUser(attributes, options);
        });
    }
    async _updateUser(attributes, options = {}) {
        try {
            return await this._useSession(async (result)=>{
                const { data: sessionData, error: sessionError } = result;
                if (sessionError) throw sessionError;
                if (!sessionData.session) throw new (0, $33da15cd88dce4fa$export$403b3fc0d3ad5f0c)();
                const session = sessionData.session;
                let codeChallenge = null;
                let codeChallengeMethod = null;
                if (this.flowType === "pkce" && attributes.email != null) {
                    const codeVerifier = (0, $48c7760cd45d5801$export$b6c3b8498f152f15)();
                    await (0, $48c7760cd45d5801$export$e82c36d29078a87f)(this.storage, `${this.storageKey}-code-verifier`, codeVerifier);
                    codeChallenge = await (0, $48c7760cd45d5801$export$eb79e16bb8189148)(codeVerifier);
                    codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
                }
                const { data: data, error: userError } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                    body: Object.assign(Object.assign({}, attributes), {
                        code_challenge: codeChallenge,
                        code_challenge_method: codeChallengeMethod
                    }),
                    jwt: session.access_token,
                    xform: (0, $0f442b898bba3d15$export$e20f488897843593)
                });
                if (userError) throw userError;
                session.user = data.user;
                await this._saveSession(session);
                await this._notifyAllSubscribers("USER_UPDATED", session);
                return {
                    data: {
                        user: session.user
                    },
                    error: null
                };
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Decodes a JWT (without performing any validation).
     */ _decodeJWT(jwt) {
        return (0, $48c7760cd45d5801$export$cc1c0b988f7b5577)(jwt);
    }
    /**
     * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
     * If the refresh token or access token in the current session is invalid, an error will be thrown.
     * @param currentSession The current session that minimally contains an access token and refresh token.
     */ async setSession(currentSession) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._setSession(currentSession);
        });
    }
    async _setSession(currentSession) {
        try {
            if (!currentSession.access_token || !currentSession.refresh_token) throw new (0, $33da15cd88dce4fa$export$403b3fc0d3ad5f0c)();
            const timeNow = Date.now() / 1000;
            let expiresAt = timeNow;
            let hasExpired = true;
            let session = null;
            const payload = (0, $48c7760cd45d5801$export$cc1c0b988f7b5577)(currentSession.access_token);
            if (payload.exp) {
                expiresAt = payload.exp;
                hasExpired = expiresAt <= timeNow;
            }
            if (hasExpired) {
                const { session: refreshedSession, error: error } = await this._callRefreshToken(currentSession.refresh_token);
                if (error) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: error
                };
                if (!refreshedSession) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                };
                session = refreshedSession;
            } else {
                const { data: data, error: error } = await this._getUser(currentSession.access_token);
                if (error) throw error;
                session = {
                    access_token: currentSession.access_token,
                    refresh_token: currentSession.refresh_token,
                    user: data.user,
                    token_type: "bearer",
                    expires_in: expiresAt - timeNow,
                    expires_at: expiresAt
                };
                await this._saveSession(session);
                await this._notifyAllSubscribers("SIGNED_IN", session);
            }
            return {
                data: {
                    user: session.user,
                    session: session
                },
                error: null
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    session: null,
                    user: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Returns a new session, regardless of expiry status.
     * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
     * If the current session's refresh token is invalid, an error will be thrown.
     * @param currentSession The current session. If passed in, it must contain a refresh token.
     */ async refreshSession(currentSession) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._refreshSession(currentSession);
        });
    }
    async _refreshSession(currentSession) {
        try {
            return await this._useSession(async (result)=>{
                var _a;
                if (!currentSession) {
                    const { data: data, error: error } = result;
                    if (error) throw error;
                    currentSession = (_a = data.session) !== null && _a !== void 0 ? _a : undefined;
                }
                if (!(currentSession === null || currentSession === void 0 ? void 0 : currentSession.refresh_token)) throw new (0, $33da15cd88dce4fa$export$403b3fc0d3ad5f0c)();
                const { session: session, error: error } = await this._callRefreshToken(currentSession.refresh_token);
                if (error) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: error
                };
                if (!session) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                };
                return {
                    data: {
                        user: session.user,
                        session: session
                    },
                    error: null
                };
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Gets the session data from a URL string
     */ async _getSessionFromURL(isPKCEFlow) {
        try {
            if (!(0, $48c7760cd45d5801$export$4e09c449d6c407f7)()) throw new (0, $33da15cd88dce4fa$export$bf5df8e043856ef5)("No browser detected.");
            if (this.flowType === "implicit" && !this._isImplicitGrantFlow()) throw new (0, $33da15cd88dce4fa$export$bf5df8e043856ef5)("Not a valid implicit grant flow url.");
            else if (this.flowType == "pkce" && !isPKCEFlow) throw new (0, $33da15cd88dce4fa$export$39583657eb2a7027)("Not a valid PKCE flow url.");
            const params = (0, $48c7760cd45d5801$export$7a29392fb778224c)(window.location.href);
            if (isPKCEFlow) {
                if (!params.code) throw new (0, $33da15cd88dce4fa$export$39583657eb2a7027)("No code detected.");
                const { data: data, error: error } = await this._exchangeCodeForSession(params.code);
                if (error) throw error;
                const url = new URL(window.location.href);
                url.searchParams.delete("code");
                window.history.replaceState(window.history.state, "", url.toString());
                return {
                    data: {
                        session: data.session,
                        redirectType: null
                    },
                    error: null
                };
            }
            if (params.error || params.error_description || params.error_code) throw new (0, $33da15cd88dce4fa$export$bf5df8e043856ef5)(params.error_description || "Error in URL with unspecified error_description", {
                error: params.error || "unspecified_error",
                code: params.error_code || "unspecified_code"
            });
            const { provider_token: provider_token, provider_refresh_token: provider_refresh_token, access_token: access_token, refresh_token: refresh_token, expires_in: expires_in, expires_at: expires_at, token_type: token_type } = params;
            if (!access_token || !expires_in || !refresh_token || !token_type) throw new (0, $33da15cd88dce4fa$export$bf5df8e043856ef5)("No session defined in URL");
            const timeNow = Math.round(Date.now() / 1000);
            const expiresIn = parseInt(expires_in);
            let expiresAt = timeNow + expiresIn;
            if (expires_at) expiresAt = parseInt(expires_at);
            const actuallyExpiresIn = expiresAt - timeNow;
            if (actuallyExpiresIn * 1000 <= $87aa3bd4a69c4df8$var$AUTO_REFRESH_TICK_DURATION) console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${actuallyExpiresIn}s, should have been closer to ${expiresIn}s`);
            const issuedAt = expiresAt - expiresIn;
            if (timeNow - issuedAt >= 120) console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", issuedAt, expiresAt, timeNow);
            else if (timeNow - issuedAt < 0) console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew", issuedAt, expiresAt, timeNow);
            const { data: data, error: error } = await this._getUser(access_token);
            if (error) throw error;
            const session = {
                provider_token: provider_token,
                provider_refresh_token: provider_refresh_token,
                access_token: access_token,
                expires_in: expiresIn,
                expires_at: expiresAt,
                refresh_token: refresh_token,
                token_type: token_type,
                user: data.user
            };
            // Remove tokens from URL
            window.location.hash = "";
            this._debug("#_getSessionFromURL()", "clearing window.location.hash");
            return {
                data: {
                    session: session,
                    redirectType: params.type
                },
                error: null
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    session: null,
                    redirectType: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
     */ _isImplicitGrantFlow() {
        const params = (0, $48c7760cd45d5801$export$7a29392fb778224c)(window.location.href);
        return !!((0, $48c7760cd45d5801$export$4e09c449d6c407f7)() && (params.access_token || params.error_description));
    }
    /**
     * Checks if the current URL and backing storage contain parameters given by a PKCE flow
     */ async _isPKCEFlow() {
        const params = (0, $48c7760cd45d5801$export$7a29392fb778224c)(window.location.href);
        const currentStorageContent = await (0, $48c7760cd45d5801$export$ba6fcb7c333d32c0)(this.storage, `${this.storageKey}-code-verifier`);
        return !!(params.code && currentStorageContent);
    }
    /**
     * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
     *
     * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
     * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
     *
     * If using `others` scope, no `SIGNED_OUT` event is fired!
     */ async signOut(options = {
        scope: "global"
    }) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._signOut(options);
        });
    }
    async _signOut({ scope: scope } = {
        scope: "global"
    }) {
        return await this._useSession(async (result)=>{
            var _a;
            const { data: data, error: sessionError } = result;
            if (sessionError) return {
                error: sessionError
            };
            const accessToken = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token;
            if (accessToken) {
                const { error: error } = await this.admin.signOut(accessToken, scope);
                if (error) {
                    // ignore 404s since user might not exist anymore
                    // ignore 401s since an invalid or expired JWT should sign out the current session
                    if (!((0, $33da15cd88dce4fa$export$4fe744aeb810d543)(error) && (error.status === 404 || error.status === 401))) return {
                        error: error
                    };
                }
            }
            if (scope !== "others") {
                await this._removeSession();
                await (0, $48c7760cd45d5801$export$d35c645d585317ec)(this.storage, `${this.storageKey}-code-verifier`);
                await this._notifyAllSubscribers("SIGNED_OUT", null);
            }
            return {
                error: null
            };
        });
    }
    /**
     * Receive a notification every time an auth event happens.
     * @param callback A callback function to be invoked when an auth event happens.
     */ onAuthStateChange(callback) {
        const id = (0, $48c7760cd45d5801$export$31b40729666a4ae0)();
        const subscription = {
            id: id,
            callback: callback,
            unsubscribe: ()=>{
                this._debug("#unsubscribe()", "state change callback with id removed", id);
                this.stateChangeEmitters.delete(id);
            }
        };
        this._debug("#onAuthStateChange()", "registered callback with id", id);
        this.stateChangeEmitters.set(id, subscription);
        (async ()=>{
            await this.initializePromise;
            await this._acquireLock(-1, async ()=>{
                this._emitInitialSession(id);
            });
        })();
        return {
            data: {
                subscription: subscription
            }
        };
    }
    async _emitInitialSession(id) {
        return await this._useSession(async (result)=>{
            var _a, _b;
            try {
                const { data: { session: session }, error: error } = result;
                if (error) throw error;
                await ((_a = this.stateChangeEmitters.get(id)) === null || _a === void 0 ? void 0 : _a.callback("INITIAL_SESSION", session));
                this._debug("INITIAL_SESSION", "callback id", id, "session", session);
            } catch (err) {
                await ((_b = this.stateChangeEmitters.get(id)) === null || _b === void 0 ? void 0 : _b.callback("INITIAL_SESSION", null));
                this._debug("INITIAL_SESSION", "callback id", id, "error", err);
                console.error(err);
            }
        });
    }
    /**
     * Sends a password reset request to an email address. This method supports the PKCE flow.
     *
     * @param email The email address of the user.
     * @param options.redirectTo The URL to send the user to after they click the password reset link.
     * @param options.captchaToken Verification token received when the user completes the captcha on the site.
     */ async resetPasswordForEmail(email, options = {}) {
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce") {
            const codeVerifier = (0, $48c7760cd45d5801$export$b6c3b8498f152f15)();
            await (0, $48c7760cd45d5801$export$e82c36d29078a87f)(this.storage, `${this.storageKey}-code-verifier`, `${codeVerifier}/PASSWORD_RECOVERY`);
            codeChallenge = await (0, $48c7760cd45d5801$export$eb79e16bb8189148)(codeVerifier);
            codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
        }
        try {
            return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: email,
                    code_challenge: codeChallenge,
                    code_challenge_method: codeChallengeMethod,
                    gotrue_meta_security: {
                        captcha_token: options.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: options.redirectTo
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: null,
                error: error
            };
            throw error;
        }
    }
    /**
     * Gets all the identities linked to a user.
     */ async getUserIdentities() {
        var _a;
        try {
            const { data: data, error: error } = await this.getUser();
            if (error) throw error;
            return {
                data: {
                    identities: (_a = data.user.identities) !== null && _a !== void 0 ? _a : []
                },
                error: null
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: null,
                error: error
            };
            throw error;
        }
    }
    /**
     * Links an oauth identity to an existing user.
     * This method supports the PKCE flow.
     */ async linkIdentity(credentials) {
        var _a;
        try {
            const { data: data, error: error } = await this._useSession(async (result)=>{
                var _a, _b, _c, _d, _e;
                const { data: data, error: error } = result;
                if (error) throw error;
                const url = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, credentials.provider, {
                    redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
                    scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
                    queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
                    skipBrowserRedirect: true
                });
                return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "GET", url, {
                    headers: this.headers,
                    jwt: (_e = (_d = data.session) === null || _d === void 0 ? void 0 : _d.access_token) !== null && _e !== void 0 ? _e : undefined
                });
            });
            if (error) throw error;
            if ((0, $48c7760cd45d5801$export$4e09c449d6c407f7)() && !((_a = credentials.options) === null || _a === void 0 ? void 0 : _a.skipBrowserRedirect)) window.location.assign(data === null || data === void 0 ? void 0 : data.url);
            return {
                data: {
                    provider: credentials.provider,
                    url: data === null || data === void 0 ? void 0 : data.url
                },
                error: null
            };
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    provider: credentials.provider,
                    url: null
                },
                error: error
            };
            throw error;
        }
    }
    /**
     * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
     */ async unlinkIdentity(identity) {
        try {
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data: data, error: error } = result;
                if (error) throw error;
                return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "DELETE", `${this.url}/user/identities/${identity.identity_id}`, {
                    headers: this.headers,
                    jwt: (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : undefined
                });
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: null,
                error: error
            };
            throw error;
        }
    }
    /**
     * Generates a new JWT.
     * @param refreshToken A valid refresh token that was returned on login.
     */ async _refreshAccessToken(refreshToken) {
        const debugName = `#_refreshAccessToken(${refreshToken.substring(0, 5)}...)`;
        this._debug(debugName, "begin");
        try {
            const startedAt = Date.now();
            // will attempt to refresh the token with exponential backoff
            return await (0, $48c7760cd45d5801$export$9e1b8e833f44ff21)(async (attempt)=>{
                await (0, $48c7760cd45d5801$export$e772c8ff12451969)(attempt * 200); // 0, 200, 400, 800, ...
                this._debug(debugName, "refreshing attempt", attempt);
                return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                    body: {
                        refresh_token: refreshToken
                    },
                    headers: this.headers,
                    xform: (0, $0f442b898bba3d15$export$273fe4673a018c2e)
                });
            }, (attempt, _, result)=>result && result.error && (0, $33da15cd88dce4fa$export$a77af358da5fb874)(result.error) && // retryable only if the request can be sent before the backoff overflows the tick duration
                Date.now() + (attempt + 1) * 200 - startedAt < $87aa3bd4a69c4df8$var$AUTO_REFRESH_TICK_DURATION);
        } catch (error) {
            this._debug(debugName, "error", error);
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: {
                    session: null,
                    user: null
                },
                error: error
            };
            throw error;
        } finally{
            this._debug(debugName, "end");
        }
    }
    _isValidSession(maybeSession) {
        const isValidSession = typeof maybeSession === "object" && maybeSession !== null && "access_token" in maybeSession && "refresh_token" in maybeSession && "expires_at" in maybeSession;
        return isValidSession;
    }
    async _handleProviderSignIn(provider, options) {
        const url = await this._getUrlForProvider(`${this.url}/authorize`, provider, {
            redirectTo: options.redirectTo,
            scopes: options.scopes,
            queryParams: options.queryParams
        });
        this._debug("#_handleProviderSignIn()", "provider", provider, "options", options, "url", url);
        // try to open on the browser
        if ((0, $48c7760cd45d5801$export$4e09c449d6c407f7)() && !options.skipBrowserRedirect) window.location.assign(url);
        return {
            data: {
                provider: provider,
                url: url
            },
            error: null
        };
    }
    /**
     * Recovers the session from LocalStorage and refreshes
     * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
     */ async _recoverAndRefresh() {
        var _a;
        const debugName = "#_recoverAndRefresh()";
        this._debug(debugName, "begin");
        try {
            const currentSession = await (0, $48c7760cd45d5801$export$ba6fcb7c333d32c0)(this.storage, this.storageKey);
            this._debug(debugName, "session from storage", currentSession);
            if (!this._isValidSession(currentSession)) {
                this._debug(debugName, "session is not valid");
                if (currentSession !== null) await this._removeSession();
                return;
            }
            const timeNow = Math.round(Date.now() / 1000);
            const expiresWithMargin = ((_a = currentSession.expires_at) !== null && _a !== void 0 ? _a : Infinity) < timeNow + (0, $71c661f15893779f$export$7d4b3a66850dd9bd);
            this._debug(debugName, `session has${expiresWithMargin ? "" : " not"} expired with margin of ${(0, $71c661f15893779f$export$7d4b3a66850dd9bd)}s`);
            if (expiresWithMargin) {
                if (this.autoRefreshToken && currentSession.refresh_token) {
                    const { error: error } = await this._callRefreshToken(currentSession.refresh_token);
                    if (error) {
                        console.error(error);
                        if (!(0, $33da15cd88dce4fa$export$a77af358da5fb874)(error)) {
                            this._debug(debugName, "refresh failed with a non-retryable error, removing the session", error);
                            await this._removeSession();
                        }
                    }
                }
            } else // no need to persist currentSession again, as we just loaded it from
            // local storage; persisting it again may overwrite a value saved by
            // another client with access to the same local storage
            await this._notifyAllSubscribers("SIGNED_IN", currentSession);
        } catch (err) {
            this._debug(debugName, "error", err);
            console.error(err);
            return;
        } finally{
            this._debug(debugName, "end");
        }
    }
    async _callRefreshToken(refreshToken) {
        var _a, _b;
        if (!refreshToken) throw new (0, $33da15cd88dce4fa$export$403b3fc0d3ad5f0c)();
        // refreshing is already in progress
        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
        const debugName = `#_callRefreshToken(${refreshToken.substring(0, 5)}...)`;
        this._debug(debugName, "begin");
        try {
            this.refreshingDeferred = new (0, $48c7760cd45d5801$export$85f6557964517f1a)();
            const { data: data, error: error } = await this._refreshAccessToken(refreshToken);
            if (error) throw error;
            if (!data.session) throw new (0, $33da15cd88dce4fa$export$403b3fc0d3ad5f0c)();
            await this._saveSession(data.session);
            await this._notifyAllSubscribers("TOKEN_REFRESHED", data.session);
            const result = {
                session: data.session,
                error: null
            };
            this.refreshingDeferred.resolve(result);
            return result;
        } catch (error) {
            this._debug(debugName, "error", error);
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) {
                const result = {
                    session: null,
                    error: error
                };
                if (!(0, $33da15cd88dce4fa$export$a77af358da5fb874)(error)) {
                    await this._removeSession();
                    await this._notifyAllSubscribers("SIGNED_OUT", null);
                }
                (_a = this.refreshingDeferred) === null || _a === void 0 || _a.resolve(result);
                return result;
            }
            (_b = this.refreshingDeferred) === null || _b === void 0 || _b.reject(error);
            throw error;
        } finally{
            this.refreshingDeferred = null;
            this._debug(debugName, "end");
        }
    }
    async _notifyAllSubscribers(event, session, broadcast = true) {
        const debugName = `#_notifyAllSubscribers(${event})`;
        this._debug(debugName, "begin", session, `broadcast = ${broadcast}`);
        try {
            if (this.broadcastChannel && broadcast) this.broadcastChannel.postMessage({
                event: event,
                session: session
            });
            const errors = [];
            const promises = Array.from(this.stateChangeEmitters.values()).map(async (x)=>{
                try {
                    await x.callback(event, session);
                } catch (e) {
                    errors.push(e);
                }
            });
            await Promise.all(promises);
            if (errors.length > 0) {
                for(let i = 0; i < errors.length; i += 1)console.error(errors[i]);
                throw errors[0];
            }
        } finally{
            this._debug(debugName, "end");
        }
    }
    /**
     * set currentSession and currentUser
     * process to _startAutoRefreshToken if possible
     */ async _saveSession(session) {
        this._debug("#_saveSession()", session);
        await (0, $48c7760cd45d5801$export$e82c36d29078a87f)(this.storage, this.storageKey, session);
    }
    async _removeSession() {
        this._debug("#_removeSession()");
        await (0, $48c7760cd45d5801$export$d35c645d585317ec)(this.storage, this.storageKey);
    }
    /**
     * Removes any registered visibilitychange callback.
     *
     * {@see #startAutoRefresh}
     * {@see #stopAutoRefresh}
     */ _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const callback = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            if (callback && (0, $48c7760cd45d5801$export$4e09c449d6c407f7)() && (window === null || window === void 0 ? void 0 : window.removeEventListener)) window.removeEventListener("visibilitychange", callback);
        } catch (e) {
            console.error("removing visibilitychange callback failed", e);
        }
    }
    /**
     * This is the private implementation of {@link #startAutoRefresh}. Use this
     * within the library.
     */ async _startAutoRefresh() {
        await this._stopAutoRefresh();
        this._debug("#_startAutoRefresh()");
        const ticker = setInterval(()=>this._autoRefreshTokenTick(), $87aa3bd4a69c4df8$var$AUTO_REFRESH_TICK_DURATION);
        this.autoRefreshTicker = ticker;
        if (ticker && typeof ticker === "object" && typeof ticker.unref === "function") // ticker is a NodeJS Timeout object that has an `unref` method
        // https://nodejs.org/api/timers.html#timeoutunref
        // When auto refresh is used in NodeJS (like for testing) the
        // `setInterval` is preventing the process from being marked as
        // finished and tests run endlessly. This can be prevented by calling
        // `unref()` on the returned object.
        ticker.unref();
        else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") // similar like for NodeJS, but with the Deno API
        // https://deno.land/api@latest?unstable&s=Deno.unrefTimer
        // @ts-ignore
        Deno.unrefTimer(ticker);
        // run the tick immediately, but in the next pass of the event loop so that
        // #_initialize can be allowed to complete without recursively waiting on
        // itself
        setTimeout(async ()=>{
            await this.initializePromise;
            await this._autoRefreshTokenTick();
        }, 0);
    }
    /**
     * This is the private implementation of {@link #stopAutoRefresh}. Use this
     * within the library.
     */ async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const ticker = this.autoRefreshTicker;
        this.autoRefreshTicker = null;
        if (ticker) clearInterval(ticker);
    }
    /**
     * Starts an auto-refresh process in the background. The session is checked
     * every few seconds. Close to the time of expiration a process is started to
     * refresh the session. If refreshing fails it will be retried for as long as
     * necessary.
     *
     * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
     * to call this function, it will be called for you.
     *
     * On browsers the refresh process works only when the tab/window is in the
     * foreground to conserve resources as well as prevent race conditions and
     * flooding auth with requests. If you call this method any managed
     * visibility change callback will be removed and you must manage visibility
     * changes on your own.
     *
     * On non-browser platforms the refresh process works *continuously* in the
     * background, which may not be desirable. You should hook into your
     * platform's foreground indication mechanism and call these methods
     * appropriately to conserve resources.
     *
     * {@see #stopAutoRefresh}
     */ async startAutoRefresh() {
        this._removeVisibilityChangedCallback();
        await this._startAutoRefresh();
    }
    /**
     * Stops an active auto refresh process running in the background (if any).
     *
     * If you call this method any managed visibility change callback will be
     * removed and you must manage visibility changes on your own.
     *
     * See {@link #startAutoRefresh} for more details.
     */ async stopAutoRefresh() {
        this._removeVisibilityChangedCallback();
        await this._stopAutoRefresh();
    }
    /**
     * Runs the auto refresh token tick.
     */ async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async ()=>{
                try {
                    const now = Date.now();
                    try {
                        return await this._useSession(async (result)=>{
                            const { data: { session: session } } = result;
                            if (!session || !session.refresh_token || !session.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return;
                            }
                            // session will expire in this many ticks (or has already expired if <= 0)
                            const expiresInTicks = Math.floor((session.expires_at * 1000 - now) / $87aa3bd4a69c4df8$var$AUTO_REFRESH_TICK_DURATION);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${expiresInTicks} ticks, a tick lasts ${$87aa3bd4a69c4df8$var$AUTO_REFRESH_TICK_DURATION}ms, refresh threshold is ${$87aa3bd4a69c4df8$var$AUTO_REFRESH_TICK_THRESHOLD} ticks`);
                            if (expiresInTicks <= $87aa3bd4a69c4df8$var$AUTO_REFRESH_TICK_THRESHOLD) await this._callRefreshToken(session.refresh_token);
                        });
                    } catch (e) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
                    }
                } finally{
                    this._debug("#_autoRefreshTokenTick()", "end");
                }
            });
        } catch (e) {
            if (e.isAcquireTimeout || e instanceof (0, $1bd8ffc1afa4c1b9$export$23e9464cc010dff9)) this._debug("auto refresh token tick lock not available");
            else throw e;
        }
    }
    /**
     * Registers callbacks on the browser / platform, which in-turn run
     * algorithms when the browser window/tab are in foreground. On non-browser
     * platforms it assumes always foreground.
     */ async _handleVisibilityChange() {
        this._debug("#_handleVisibilityChange()");
        if (!(0, $48c7760cd45d5801$export$4e09c449d6c407f7)() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
            if (this.autoRefreshToken) // in non-browser environments the refresh token ticker runs always
            this.startAutoRefresh();
            return false;
        }
        try {
            this.visibilityChangedCallback = async ()=>await this._onVisibilityChanged(false);
            window === null || window === void 0 || window.addEventListener("visibilitychange", this.visibilityChangedCallback);
            // now immediately call the visbility changed callback to setup with the
            // current visbility state
            await this._onVisibilityChanged(true); // initial call
        } catch (error) {
            console.error("_handleVisibilityChange", error);
        }
    }
    /**
     * Callback registered with `window.addEventListener('visibilitychange')`.
     */ async _onVisibilityChanged(calledFromInitialize) {
        const methodName = `#_onVisibilityChanged(${calledFromInitialize})`;
        this._debug(methodName, "visibilityState", document.visibilityState);
        if (document.visibilityState === "visible") {
            if (this.autoRefreshToken) // in browser environments the refresh token ticker runs only on focused tabs
            // which prevents race conditions
            this._startAutoRefresh();
            if (!calledFromInitialize) {
                // called when the visibility has changed, i.e. the browser
                // transitioned from hidden -> visible so we need to see if the session
                // should be recovered immediately... but to do that we need to acquire
                // the lock first asynchronously
                await this.initializePromise;
                await this._acquireLock(-1, async ()=>{
                    if (document.visibilityState !== "visible") {
                        this._debug(methodName, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                        // visibility has changed while waiting for the lock, abort
                        return;
                    }
                    // recover the session
                    await this._recoverAndRefresh();
                });
            }
        } else if (document.visibilityState === "hidden") {
            if (this.autoRefreshToken) this._stopAutoRefresh();
        }
    }
    /**
     * Generates the relevant login URL for a third-party provider.
     * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param options.scopes A space-separated list of scopes granted to the OAuth application.
     * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
     */ async _getUrlForProvider(url, provider, options) {
        const urlParams = [
            `provider=${encodeURIComponent(provider)}`
        ];
        if (options === null || options === void 0 ? void 0 : options.redirectTo) urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
        if (options === null || options === void 0 ? void 0 : options.scopes) urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
        if (this.flowType === "pkce") {
            const codeVerifier = (0, $48c7760cd45d5801$export$b6c3b8498f152f15)();
            await (0, $48c7760cd45d5801$export$e82c36d29078a87f)(this.storage, `${this.storageKey}-code-verifier`, codeVerifier);
            const codeChallenge = await (0, $48c7760cd45d5801$export$eb79e16bb8189148)(codeVerifier);
            const codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
            this._debug("PKCE", "code verifier", `${codeVerifier.substring(0, 5)}...`, "code challenge", codeChallenge, "method", codeChallengeMethod);
            const flowParams = new URLSearchParams({
                code_challenge: `${encodeURIComponent(codeChallenge)}`,
                code_challenge_method: `${encodeURIComponent(codeChallengeMethod)}`
            });
            urlParams.push(flowParams.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.queryParams) {
            const query = new URLSearchParams(options.queryParams);
            urlParams.push(query.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.skipBrowserRedirect) urlParams.push(`skip_http_redirect=${options.skipBrowserRedirect}`);
        return `${url}?${urlParams.join("&")}`;
    }
    async _unenroll(params) {
        try {
            return await this._useSession(async (result)=>{
                var _a;
                const { data: sessionData, error: sessionError } = result;
                if (sessionError) return {
                    data: null,
                    error: sessionError
                };
                return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "DELETE", `${this.url}/factors/${params.factorId}`, {
                    headers: this.headers,
                    jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                });
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: null,
                error: error
            };
            throw error;
        }
    }
    /**
     * {@see GoTrueMFAApi#enroll}
     */ async _enroll(params) {
        try {
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data: sessionData, error: sessionError } = result;
                if (sessionError) return {
                    data: null,
                    error: sessionError
                };
                const { data: data, error: error } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/factors`, {
                    body: {
                        friendly_name: params.friendlyName,
                        factor_type: params.factorType,
                        issuer: params.issuer
                    },
                    headers: this.headers,
                    jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                });
                if (error) return {
                    data: null,
                    error: error
                };
                if ((_b = data === null || data === void 0 ? void 0 : data.totp) === null || _b === void 0 ? void 0 : _b.qr_code) data.totp.qr_code = `data:image/svg+xml;utf-8,${data.totp.qr_code}`;
                return {
                    data: data,
                    error: null
                };
            });
        } catch (error) {
            if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                data: null,
                error: error
            };
            throw error;
        }
    }
    /**
     * {@see GoTrueMFAApi#verify}
     */ async _verify(params) {
        return this._acquireLock(-1, async ()=>{
            try {
                return await this._useSession(async (result)=>{
                    var _a;
                    const { data: sessionData, error: sessionError } = result;
                    if (sessionError) return {
                        data: null,
                        error: sessionError
                    };
                    const { data: data, error: error } = await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/factors/${params.factorId}/verify`, {
                        body: {
                            code: params.code,
                            challenge_id: params.challengeId
                        },
                        headers: this.headers,
                        jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                    });
                    if (error) return {
                        data: null,
                        error: error
                    };
                    await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1000) + data.expires_in
                    }, data));
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", data);
                    return {
                        data: data,
                        error: error
                    };
                });
            } catch (error) {
                if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * {@see GoTrueMFAApi#challenge}
     */ async _challenge(params) {
        return this._acquireLock(-1, async ()=>{
            try {
                return await this._useSession(async (result)=>{
                    var _a;
                    const { data: sessionData, error: sessionError } = result;
                    if (sessionError) return {
                        data: null,
                        error: sessionError
                    };
                    return await (0, $0f442b898bba3d15$export$8969b3850ca2cdfd)(this.fetch, "POST", `${this.url}/factors/${params.factorId}/challenge`, {
                        headers: this.headers,
                        jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                    });
                });
            } catch (error) {
                if ((0, $33da15cd88dce4fa$export$cde1786a482f9a1c)(error)) return {
                    data: null,
                    error: error
                };
                throw error;
            }
        });
    }
    /**
     * {@see GoTrueMFAApi#challengeAndVerify}
     */ async _challengeAndVerify(params) {
        // both _challenge and _verify independently acquire the lock, so no need
        // to acquire it here
        const { data: challengeData, error: challengeError } = await this._challenge({
            factorId: params.factorId
        });
        if (challengeError) return {
            data: null,
            error: challengeError
        };
        return await this._verify({
            factorId: params.factorId,
            challengeId: challengeData.id,
            code: params.code
        });
    }
    /**
     * {@see GoTrueMFAApi#listFactors}
     */ async _listFactors() {
        // use #getUser instead of #_getUser as the former acquires a lock
        const { data: { user: user }, error: userError } = await this.getUser();
        if (userError) return {
            data: null,
            error: userError
        };
        const factors = (user === null || user === void 0 ? void 0 : user.factors) || [];
        const totp = factors.filter((factor)=>factor.factor_type === "totp" && factor.status === "verified");
        return {
            data: {
                all: factors,
                totp: totp
            },
            error: null
        };
    }
    /**
     * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
     */ async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async ()=>{
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data: { session: session }, error: sessionError } = result;
                if (sessionError) return {
                    data: null,
                    error: sessionError
                };
                if (!session) return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
                const payload = this._decodeJWT(session.access_token);
                let currentLevel = null;
                if (payload.aal) currentLevel = payload.aal;
                let nextLevel = currentLevel;
                const verifiedFactors = (_b = (_a = session.user.factors) === null || _a === void 0 ? void 0 : _a.filter((factor)=>factor.status === "verified")) !== null && _b !== void 0 ? _b : [];
                if (verifiedFactors.length > 0) nextLevel = "aal2";
                const currentAuthenticationMethods = payload.amr || [];
                return {
                    data: {
                        currentLevel: currentLevel,
                        nextLevel: nextLevel,
                        currentAuthenticationMethods: currentAuthenticationMethods
                    },
                    error: null
                };
            });
        });
    }
}
$87aa3bd4a69c4df8$export$2e2bcd8739ae039.nextInstanceID = 0;



const $6f19463074600112$var$AuthAdminApi = (0, $21111cc734990d8d$export$2e2bcd8739ae039);
var $6f19463074600112$export$2e2bcd8739ae039 = $6f19463074600112$var$AuthAdminApi;



const $f667a2c4efc99cc8$var$AuthClient = (0, $87aa3bd4a69c4df8$export$2e2bcd8739ae039);
var $f667a2c4efc99cc8$export$2e2bcd8739ae039 = $f667a2c4efc99cc8$var$AuthClient;








class $f79bacf206633843$export$8199a418bb09bd56 extends (0, $87aa3bd4a69c4df8$export$2e2bcd8739ae039) {
    constructor(options){
        super(options);
    }
}


var $204a747f07f16400$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class $204a747f07f16400$export$2e2bcd8739ae039 {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.global.fetch A custom fetch implementation.
     * @param options.global.headers Any additional headers to send with each network request.
     */ constructor(supabaseUrl, supabaseKey, options){
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        if (!supabaseUrl) throw new Error("supabaseUrl is required.");
        if (!supabaseKey) throw new Error("supabaseKey is required.");
        const _supabaseUrl = (0, $b32da7225929a77a$export$d95b4586d238a081)(supabaseUrl);
        this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace(/^http/i, "ws");
        this.authUrl = `${_supabaseUrl}/auth/v1`;
        this.storageUrl = `${_supabaseUrl}/storage/v1`;
        this.functionsUrl = `${_supabaseUrl}/functions/v1`;
        // default storage key uses the supabase project ref as a namespace
        const defaultStorageKey = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`;
        const DEFAULTS = {
            db: (0, $ec498013eb2fb0cf$export$b31378ae815bea6b),
            realtime: (0, $ec498013eb2fb0cf$export$59685507ca0a3912),
            auth: Object.assign(Object.assign({}, (0, $ec498013eb2fb0cf$export$af122550cc2345b3)), {
                storageKey: defaultStorageKey
            }),
            global: (0, $ec498013eb2fb0cf$export$b63a5c3a2e5becd2)
        };
        const settings = (0, $b32da7225929a77a$export$da186dc3f8eace71)(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_b = (_a = settings.auth) === null || _a === void 0 ? void 0 : _a.storageKey) !== null && _b !== void 0 ? _b : "";
        this.headers = (_d = (_c = settings.global) === null || _c === void 0 ? void 0 : _c.headers) !== null && _d !== void 0 ? _d : {};
        this.auth = this._initSupabaseAuthClient((_e = settings.auth) !== null && _e !== void 0 ? _e : {}, this.headers, (_f = settings.global) === null || _f === void 0 ? void 0 : _f.fetch);
        this.fetch = (0, $e43b150e1f2ef1c7$export$651dd5aef824521f)(supabaseKey, this._getAccessToken.bind(this), (_g = settings.global) === null || _g === void 0 ? void 0 : _g.fetch);
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers
        }, settings.realtime));
        this.rest = new (0, $d9a060a71a7eddb8$export$2e2bcd8739ae039)(`${_supabaseUrl}/rest/v1`, {
            headers: this.headers,
            schema: (_h = settings.db) === null || _h === void 0 ? void 0 : _h.schema,
            fetch: this.fetch
        });
        this._listenForAuthEvents();
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */ get functions() {
        return new (0, $21ec0e6ed76bbabb$export$1d0b400bf8a0fa55)(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch
        });
    }
    /**
     * Supabase Storage allows you to manage user-generated content, such as photos or videos.
     */ get storage() {
        return new (0, $649f6e85d79b8793$export$6c85f5032e75eff9)(this.storageUrl, this.headers, this.fetch);
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        return this.rest.from(relation);
    }
    /**
     * Perform a query on a schema distinct from the default schema supplied via
     * the `options.db.schema` constructor parameter.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The name of the schema to query
     */ schema(schema) {
        return this.rest.schema(schema);
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, options) {
        return this.rest.rpc(fn, args, options);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */ channel(name, opts = {
        config: {}
    }) {
        return this.realtime.channel(name, opts);
    }
    /**
     * Returns all Realtime channels.
     */ getChannels() {
        return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */ removeChannel(channel) {
        return this.realtime.removeChannel(channel);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */ removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
        var _a, _b;
        return $204a747f07f16400$var$__awaiter(this, void 0, void 0, function*() {
            const { data: data } = yield this.auth.getSession();
            return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : null;
        });
    }
    _initSupabaseAuthClient({ autoRefreshToken: autoRefreshToken, persistSession: persistSession, detectSessionInUrl: detectSessionInUrl, storage: storage, storageKey: storageKey, flowType: flowType, debug: debug }, headers, fetch) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new (0, $f79bacf206633843$export$8199a418bb09bd56)({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, authHeaders), headers),
            storageKey: storageKey,
            autoRefreshToken: autoRefreshToken,
            persistSession: persistSession,
            detectSessionInUrl: detectSessionInUrl,
            storage: storage,
            flowType: flowType,
            debug: debug,
            fetch: fetch
        });
    }
    _initRealtimeClient(options) {
        return new (0, $4549dbed6f780083$export$2e2bcd8739ae039)(this.realtimeUrl, Object.assign(Object.assign({}, options), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, options === null || options === void 0 ? void 0 : options.params)
        }));
    }
    _listenForAuthEvents() {
        let data = this.auth.onAuthStateChange((event, session)=>{
            this._handleTokenChanged(event, "CLIENT", session === null || session === void 0 ? void 0 : session.access_token);
        });
        return data;
    }
    _handleTokenChanged(event, source, token) {
        if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
            // Token has changed
            this.realtime.setAuth(token !== null && token !== void 0 ? token : null);
            this.changedAccessToken = token;
        } else if (event === "SIGNED_OUT") {
            // Token is removed
            this.realtime.setAuth(this.supabaseKey);
            if (source == "STORAGE") this.auth.signOut();
            this.changedAccessToken = undefined;
        }
    }
}





const $15ea578b85be78fa$export$5d730b7aed1a3eb0 = (supabaseUrl, supabaseKey, options)=>{
    return new (0, $204a747f07f16400$export$2e2bcd8739ae039)(supabaseUrl, supabaseKey, options);
};


const $89133b5167047772$var$supabaseUrl = "https://zjfleyijqxqjbwabuucw.supabase.co";
const $89133b5167047772$var$supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZmxleWlqcXhxamJ3YWJ1dWN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NTEyNjgsImV4cCI6MjA2NDQyNzI2OH0.e4gQgy43WhCQCgPWssWW-_y3_7VHpizBLb9wD60XwzY";
const $89133b5167047772$export$a0b632a28672d3c0 = (0, $15ea578b85be78fa$export$5d730b7aed1a3eb0)($89133b5167047772$var$supabaseUrl, $89133b5167047772$var$supabaseKey);


async function $f2c717b4f036b6c3$export$fc3b441efa2df883(url, title, category, userId, imageUrl) {
    const { data: data, error: error } = await (0, $89133b5167047772$export$a0b632a28672d3c0).from("urls").insert([
        {
            url: url,
            title: title,
            category: category,
            user_id: userId,
            thumbnail_url: imageUrl
        }
    ]);
    if (error) {
        console.error("Supabase insert error:", error);
        return {
            success: false,
            error: error
        };
    }
    return {
        success: true,
        data: data
    };
}
async function $f2c717b4f036b6c3$export$71a7b09aee976d34() {
    const { data: data, error: error } = await (0, $89133b5167047772$export$a0b632a28672d3c0).from("urls").select("id, url, title, category, user_id, thumbnail_url, visited, created_at").order("created_at", {
        ascending: false
    });
    if (error) {
        console.error("Supabase fetch error:", error);
        return [];
    }
    return data;
}
async function $f2c717b4f036b6c3$export$3a99609c3dc7bce9(id) {
    const { data: data, error: error } = await (0, $89133b5167047772$export$a0b632a28672d3c0).from("urls").delete().eq("id", id);
    if (error) {
        console.error("Supabase delete error:", error);
        return {
            success: false,
            error: error
        };
    }
    return {
        success: true,
        data: data
    };
}


async function $0cec441122db47af$export$41b3415e6330f1b5(url) {
    const API_KEY = "479caf1751a010ec074397313794465c"; // LinkPreview API
    const apiUrl = `https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(url)}`;
    try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`HTTP\u{30A8}\u{30E9}\u{30FC}: ${res.status}`);
        const data = await res.json();
        // プロキシ経由で画像を取得
        const rawImageUrl = data.image || "https://placehold.co/300x200";
        const proxiedImageUrl = `https://proxy-server-89ba.onrender.com/proxy?url=${encodeURIComponent(rawImageUrl)}`;
        return proxiedImageUrl;
    } catch (error) {
        console.error("\u753B\u50CFURL\u53D6\u5F97\u30A8\u30E9\u30FC:", error);
        return "https://placehold.co/300x200";
    }
}



console.log("\u2705 main.js loaded");
document.addEventListener("DOMContentLoaded", async ()=>{
    // 認証ユーザー取得（仮に未ログインならテスト用ID）
    const { data: { session: session } } = await (0, $89133b5167047772$export$a0b632a28672d3c0).auth.getSession();
    const userId = session?.user?.id || "user_123";
    const urlForm = document.getElementById("urlForm");
    const urlList = document.getElementById("urlList");
    const thumbnailPreview = document.getElementById("thumbnail");
    async function loadUrls() {
        console.log("\u25B6\uFE0F loadUrls called");
        urlList.innerHTML = "";
        const urls = await (0, $f2c717b4f036b6c3$export$71a7b09aee976d34)();
        const fragment = document.createDocumentFragment();
        urls.forEach(({ id: id, url: url, title: title, thumbnail_url: thumbnail_url })=>{
            const li = document.createElement("li");
            li.style.display = "flex";
            li.style.alignItems = "center";
            li.style.gap = "12px";
            li.style.margin = "10px 0";
            // 画像
            const img = document.createElement("img");
            const proxiedUrl = thumbnail_url ? `http://localhost:3001/proxy?url=${encodeURIComponent(thumbnail_url)}` : "https://placehold.co/80x80";
            img.src = proxiedUrl;
            img.width = 80;
            img.height = 80;
            img.alt = "\u30B5\u30E0\u30CD\u30A4\u30EB";
            img.style.objectFit = "cover";
            img.onerror = ()=>{
                img.src = "https://placehold.co/80x80";
            };
            // タイトルリンク
            const link = document.createElement("a");
            link.href = url;
            link.target = "_blank";
            link.innerText = title;
            link.style.flex = "1";
            link.style.fontWeight = "bold";
            link.style.fontSize = "16px";
            link.style.color = "#E76F51";
            link.style.textDecoration = "none";
            // 削除ボタン
            const btnDelete = document.createElement("button");
            btnDelete.innerText = "\u524A\u9664";
            btnDelete.classList.add("btn-delete");
            btnDelete.onclick = async ()=>{
                if (!confirm(`\u{300C}${title}\u{300D}\u{3092}\u{524A}\u{9664}\u{3057}\u{307E}\u{3059}\u{304B}\u{FF1F}`)) return;
                const { success: success, error: error } = await (0, $f2c717b4f036b6c3$export$3a99609c3dc7bce9)(id);
                if (success) loadUrls();
                else {
                    alert("\u524A\u9664\u306B\u5931\u6557\u3057\u307E\u3057\u305F");
                    console.error(error);
                }
            };
            // 並び順：画像 → タイトルリンク → 削除ボタン
            li.appendChild(img);
            li.appendChild(link);
            li.appendChild(btnDelete);
            fragment.appendChild(li);
        });
        urlList.appendChild(fragment);
    }
    urlForm.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const url = urlForm.urlInput.value.trim();
        const title = urlForm.titleInput.value.trim();
        const category = urlForm.categoryInput.value.trim();
        if (!url || !title || !category) return;
        const imageUrl = await (0, $0cec441122db47af$export$41b3415e6330f1b5)(url);
        await (0, $f2c717b4f036b6c3$export$fc3b441efa2df883)(url, title, category, userId, imageUrl);
        // プレビュー
        const proxiedImageUrl = `http://localhost:3001/proxy?url=${encodeURIComponent(imageUrl)}`;
        thumbnailPreview.src = proxiedImageUrl;
        thumbnailPreview.onerror = ()=>{
            thumbnailPreview.src = "https://placehold.co/300x200";
        };
        urlForm.reset();
        loadUrls();
    });
    loadUrls();
});


//# sourceMappingURL=index.c2df2637.js.map
