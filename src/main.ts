import * as core from '@actions/core';
import * as exec from '@actions/exec'

async function run() {
  try {
    await exec.exec('julia', ['--color=yes', '-e', 'using Pkg; Pkg.activate("juliaformatlinter", shared=true); Pkg.add(PackageSpec(name="DocumentFormat", rev="external-api")); Pkg.add("FilePaths"); using DocumentFormat, FilePaths; DocumentFormat.isformatted(p".") ? nothing : error("Things are not properly formatted.")'])
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
