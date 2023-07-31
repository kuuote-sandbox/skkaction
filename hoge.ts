import { isString } from "https://deno.land/x/unknownutil@v3.2.0/mod.ts";

const a = Deno.readTextFileSync(Deno.args[0]);
console.log(a);
