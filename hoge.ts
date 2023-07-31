const a = await new Response(Deno.stdin.readable).text();
console.log(a);
