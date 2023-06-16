import github from "../lib/github-client";

describe("github-client", () => {
  test("user-agent", () => {
    const ua = github.defaults.headers["user-agent"];
    expect(ua).toMatch(/^@felickz\/create-discussion-comment\/\d+\.\d+\.\d+$/);
  });
});
