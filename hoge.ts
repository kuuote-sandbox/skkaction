import * as u from "https://deno.land/x/unknownutil@v3.2.0/mod.ts";

type Event = {
  action: string;
  issue: {
    body: string;
    number: number;
  };
};

const isEvent: u.Predicate<Event> = u.isObjectOf({
  action: u.isString,
  issue: u.isObjectOf({
    body: u.isString,
    number: u.isNumber,
  }),
});

isEvent(42);

async function main() {
  const a = JSON.parse(await Deno.readTextFile(Deno.args[0])) as unknown;
  u.assert(a, isEvent);
  console.log(a);
  return 0;
}

Deno.exit(await main());
