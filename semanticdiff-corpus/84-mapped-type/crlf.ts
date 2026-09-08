// Windows line endings
type X<T> = { readonly [K in keyof T]?: T[K] };
