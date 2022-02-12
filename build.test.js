const fs = require("fs");

describe("build", () => {
  test("should generate card with colors", () => {
    expect.assertions(1);

    const card = fs.readFileSync("./bin/card", { encoding: "utf8", flag: "r" });

    expect(card).toMatchInlineSnapshot(`
      "[32m[39m
      [32m   ┌─────────────────────────────────────────────────────┐[39m
      [32m   │                                                     │[39m
      [32m   │   [37mTomas Echeverri[39m[32m / [37mtecheverri[39m[32m                      │[39m
      [32m   │   [90m[3mMade in [33mColo[39m[32m[90m[34mmb[39m[32m[90m[31mia[39m[32m[90m. Living in Sweden.[23m[39m[32m               │[39m
      [32m   │                                                     │[39m
      [32m   │       [37m[1mWork:[22m[39m[32m [37mSoftware Engineer at [32m[3mShopify[23m[39m[32m[37m[39m[32m            │[39m
      [32m   │    [37m[1mTwitter:[22m[39m[32m [90mhttps://twitter.com/[36mTomasEcheverri[39m[32m[90m[39m[32m      │[39m
      [32m   │     [37m[1mGitHub:[22m[39m[32m [90mhttps://github.com/[32mtecheverri[39m[32m[90m[39m[32m           │[39m
      [32m   │        [37m[1mnpm:[22m[39m[32m [90mhttps://www.npmjs.com/[31m~techeverri[39m[32m[90m[39m[32m       │[39m
      [32m   │   [37m[1mLinkedIn:[22m[39m[32m [90mhttps://www.linkedin.com/in/[34mtomechval[39m[32m[90m[39m[32m   │[39m
      [32m   │    [37m[1mWebsite:[22m[39m[32m [35mhttps://techeverri.dev[39m[32m                  │[39m
      [32m   │                                                     │[39m
      [32m   │       [37m[1mCard:[22m[39m[32m npx techeverri                          │[39m
      [32m   │                                                     │[39m
      [32m   └─────────────────────────────────────────────────────┘[39m
      [32m[39m"
    `);
  });
});
