module.exports = function (eleventyConfig) {
eleventyConfig.addPassthroughCopy("src/style.css");
eleventyConfig.addPassthroughCopy("src/script.js");
eleventyConfig.addPassthroughCopy("src/snow.js");
eleventyConfig.addPassthroughCopy("assets");
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};