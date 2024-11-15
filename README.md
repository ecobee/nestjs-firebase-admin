# Nestjs adaptor module for Firebase Admin

## Description

Firebase Admin Module for [Nest.js Framework](https://nestjs.com/)

Unlike the original module, this module uses `npm` in place of `yarn`.

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

## License

### Original MIT License

MIT © [Aginix Technologies Co., Ltd.](https://github.com/Aginix/nestjs-firebase-admin)

### Custom License for Modifications

The modifications to this code are proprietary and restricted to ecobee. Unauthorized distribution, copying, or modification of these modifications is prohibited.

The original code is licensed under the MIT License, which can be found in the [LICENSE](./LICENCE) file.
