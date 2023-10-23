import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  validatePrimaryPackageOutputTarget: true,
  sourceMap: true,
  minifyJs: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      isPrimaryPackageOutputTarget: true
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      strict: true,
      dir: '../../stencil-docs/docs'
    },
    {
      type: 'www',
      empty: false,
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  }
};
