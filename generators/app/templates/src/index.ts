const <%- ctx.classfiy(project_name)%> = (): void => {
  console.log('hello');
};

// for es6 import
export default <%- ctx.classfiy(project_name)%>;

// for commonjs es5 require
module.exports = <%- ctx.classfiy(project_name)%>;
