# Nestjs adaptor module for Firebase Admin

## Description

Firebase Admin Module for [Nest.js Framework](https://nestjs.com/)

Unlike the original module, this module is made to work with [service-relay](github.com/ecobee/service-relay) and uses `npm` in place of `yarn`.

## Requirements

Requires node ^18.12.x, npm ^8.19.x.

## Installation

```bash
$ npm i ecobee/nestjs-firebase-admin
```

### Import module

```typescript
import { Module } from '@nestjs/common';
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';
import * as admin from 'firebase-admin';

@Module({
  imports: [
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.applicationDefault(),
      }),
    }),
  ],
})
export class AppModule {}
```

## Usage

### Inject Authentication Service

```typescript
import { Injectable } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';

@Injectable()
export class AppService {
  constructor(private firebaseAuth: FirebaseAuthenticationService) {}

  getUsers() {
    return this.firebaseAuth.listUsers();
  }
}
```

## Compatibility Table

| firebase-admin | NestJS Library |
| -------------- | -------------- |
| `9.xx`         | `main`         |
| `8.xx`         | `1.xx`         |

## Pull requests

When making a pull request for the library ensure the built `/dist` folder is included by running `npm run build`

## Deploying a new version

When you want to cut a release for the library

### Ensure main has no uncommited build artifacts

1. `npm run build`
2. `git add .`
3. `git commit -m "Commiting build artifacts"`

### Cut and push tag for release

1.  `npm version <major,minor,patch> -m "Release %s"`
2.  `git push origin main --tags`

## Testing changes locally in a service

If you would like to use a local version of your `nestjs-firebase-admin` for development with any of our services you can use the `yalc` tool.

`npm i -g yalc`

### Publish the nestjs-firebase-admin repo to the local yalc store

This step ensures that the repo is added to the yalc internal store.

Navigate to the `nestjs-firebase-admin` folder

`yalc publish`

### Install the lib to the service

The lib must now be installed on the service. This step will update the package.json to point to the yalc store.

From the service folder

1. `yalc add @ecobee/nestjs-firebase-admin`
2. `npm install`

### Push new nestjs-firebase-admin changes to the yalc store

Whenever you make a change to the lib and want to propagate that change anywhere the lib is installed

From the `nestjs-firebase-admin` folder

1. `npm run build`
2. `yalc push`

## License

### Original MIT License

MIT © [Aginix Technologies Co., Ltd.](https://github.com/Aginix/nestjs-firebase-admin)

### Custom License for Modifications

The modifications to this code are proprietary and restricted to ecobee. Unauthorized distribution, copying, or modification of these modifications is prohibited.

The original code is licensed under the MIT License, which can be found in the [LICENSE](./LICENCE) file.
