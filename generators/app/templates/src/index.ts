declare var wx: any;

const <%- ctx.classify(String(project_name)) %> = (): void => {
  console.log('hello');
};

// ---- UMD DELETE ME ----
// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = <%- ctx.classify(String(project_name)) %>;
}

export default <%- ctx.classify(String(project_name)) %>;
