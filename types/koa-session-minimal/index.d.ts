// Type definitions for koa-session-minimal v3.x
// Project: https://github.com/longztian/koa-session-minimal
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as Koa from "koa";
    import session = require("koa-session-minimal");

    const app = new Koa();
    app.use(session());

 =============================================== */

import * as cookies from "cookies";
import * as Koa from "koa";

declare module "koa" {
    interface Context {
        session: any;
        sessionHandler: { regenerateId: () => void };
    }
}

declare function session(opts?: {
    /**
     * session cookie name and store key prefix. Default is 'koa:sess'
     */
    key?: string | undefined;

    /**
     * cookie options
     */
    cookie?: cookies.IOptions | { (ctx?: Koa.Context): cookies.IOptions } | undefined;

    /**
     * session store
     */
    store?: any;
}): Koa.Middleware;

declare namespace session {}
export = session;
