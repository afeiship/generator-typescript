"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const glob = require("glob");
const { resolve } = require("path");
const remote = require("yeoman-remote");
const yoHelper = require("@jswork/yeoman-generator-helper");
const replace = require("replace-in-file");
const getp = require("@jswork/generator-prompts");
const prompts = getp(["scope", "registry", "project_name", "description"]);

require("@jswork/next-registry-choices");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the stunning ${chalk.red(
          "generator-typescript-package"
        )} generator!`
      )
    );

    this.props = await this.prompt(prompts);
    yoHelper.rewriteProps(this.props);
  }

  writing() {
    this.fs.copyTpl(
      globby.sync(this.templatePath("**"), { dot: true }),
      this.destinationPath(),
      this.props
    );
  }

  end() {
    const {
      scope,
      project_name,
      description,
      ProjectName,
      projectName
    } = this.props;
    const files = glob.sync(resolve(this.destinationPath(), "{**,.*}"));

    replace.sync({
      files,
      from: [
        /boilerplate-typescript-package-description/g,
        /boilerplate-typescript-package/g,
        /boilerplate-scope/g,
        /BoilerplateTypescriptPackage/g,
        /boilerplateTypescriptPackage/g
      ],
      to: [description, project_name, scope, ProjectName, projectName]
    });
  }
};
