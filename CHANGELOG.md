# 1.0.0-beta

* Multiple options [223f02f](https://github.com/NejcZdovc/ng2-select2/commit/223f02fc598cd4d550baf03f82874839ee95e2c1)
* Updated dependencies [af513af](https://github.com/NejcZdovc/ng2-select2/commit/af513afc611701cb0826d05336216010232f945c)
* Disable default style for select2 [2692aec](https://github.com/NejcZdovc/ng2-select2/commit/2692aecf6176a8c4a339715ed4fe6b89ba4040c8)
* Support for custom matcher [d269db9](https://github.com/NejcZdovc/ng2-select2/commit/d269db9438b74c9200f5c4eca9c5dd3db71a9663)
* Fixed no provider error [305a388](https://github.com/NejcZdovc/ng2-select2/commit/305a388acacffcb3f5ecc62a6b114a245b29558b)
* Fixed multiple value emit [853837b](https://github.com/NejcZdovc/ng2-select2/commit/853837ba652422436a110511fc269b94fad5d532)
* Added disabled options [b19a3ed](https://github.com/NejcZdovc/ng2-select2/commit/b19a3eda1c5583d2bfad26bf7752c162cf9838a7)
* Fixed initial value when you are using custom matcher [e366b91](https://github.com/NejcZdovc/ng2-select2/commit/e366b91716510b72b48287cf1564e9eebb489c1a)
* Added multiple value support via array's [4396df6](https://github.com/NejcZdovc/ng2-select2/commit/4396df6634a08594bfeb962f3b105e11cfec394b)
* Fix async require oldMatcher [12f23188](https://github.com/NejcZdovc/ng2-select2/commit/12f23188f3bef3346802436c245c146c149a2b53)

### BREAKING CHANGE
With version 1.0.0 you can now pass all options that are available for select 2. But to accomplish that `theme`, `templateSelection` and `templateResult` where removed from direct `@Inputs`.

# 0.7.0 (15.12.2016)

* Added better error handling ([acb4243](https://github.com/NejcZdovc/ng2-select2/commit/acb4243))
* Trigger valueChanged event when we change value via `@Input` ([81b90f9](https://github.com/NejcZdovc/ng2-select2/commit/81b90f9), [9a3b25e](https://github.com/NejcZdovc/ng2-select2/commit/9a3b25e))
* Improved README ([f954ecc](https://github.com/NejcZdovc/ng2-select2/commit/f954ecc))
* Added renderer ([369571b](https://github.com/NejcZdovc/ng2-select2/commit/369571b))

# 0.6.2 (14.12.2016)

* Fixed recursive bug #28 ([4e40ac3](https://github.com/NejcZdovc/ng2-select2/commit/4e40ac3))

# 0.6.1 (18.11.2016)

* Removed generated files from GIT
* Added AOT build

# 0.6.0 (16.11.2016)

* Now plugin is using NgModule
* Updated angular to version 2.2.0
* Changed licence to MIT
* Added support for async data #17
