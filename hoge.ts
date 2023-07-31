import * as u from "https://deno.land/x/unknownutil@v3.2.0/mod.ts";

const isEvent = u.isObjectOf({
  action: u.isString,
  issue: u.isObjectOf({
    body: u.isString,
    number: u.isNumber,
  }),
});

type Event = typeof isEvent extends u.Predicate<infer T> ? T : never;

async function main() {
  const event = JSON.parse(await Deno.readTextFile(Deno.args[0])) as unknown;
  u.assert(event, isEvent);
  console.log(event);
  return 0;
}

Deno.exit(await main());
