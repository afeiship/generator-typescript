const <%- ctx.camelize(String(project_name)) %> = (): void => {
  console.log('hello');
};

export default <%- ctx.camelize(String(project_name)) %>;
