# moko-timestamps

Adds timestamp fields to a model and updates them on save and create. By default
the fields are `createdAt` and `updatedAt` but they can be specified when using.

## Example

```js
var timestamps = require('moko-timestamps');

var User = moko('User');
User.use(timestamps());

var user = yield new User();
yield user.save()
console.log(user.createdAt) // Some date
console.log(user.updatedAt) // Some date


// Or with custom Attributes defined:
User.use(timestamps('bornAt', 'savedAt'));
var user = yield new User();
yield user.save()
console.log(user.bornAt) // Some date
console.log(user.savedAt) // Some date
```
