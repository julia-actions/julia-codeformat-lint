import * as core from '@actions/core';
import * as exec from '@actions/exec'

async function run() {
  try {
    await exec.exec('julia', ['--color=yes', '-e', 'using Pkg; Pkg.activate("juliaformatlinter", shared=true); Pkg.add(["DocumentFormat", "FilePaths"]); using DocumentFormat, FilePaths; exit(DocumentFormat.isformatted(p".") ? 0 : 1)'])
  } catch (error) {
    core.setFailed("The Julia source code is not properly formatted.");
  }
}

run();
