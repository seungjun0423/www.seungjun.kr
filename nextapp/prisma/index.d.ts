
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Category: 'Category',
    SubCategory: 'SubCategory',
    Post: 'Post'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'admin' | 'category' | 'subCategory' | 'post'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subcategoryies: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    subcategoryies?: boolean | CategoryCountOutputTypeCountSubcategoryiesArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubcategoryiesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }



  /**
   * Count Type SubCategoryCountOutputType
   */

  export type SubCategoryCountOutputType = {
    post: number
  }

  export type SubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    post?: boolean | SubCategoryCountOutputTypeCountPostArgs
  }

  // Custom InputTypes

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryCountOutputType
     */
    select?: SubCategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    password?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly password: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    title: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subcategoryies?: boolean | Category$subcategoryiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    subcategoryies?: boolean | Category$subcategoryiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      subcategoryies: Prisma.$SubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subcategoryies<T extends Category$subcategoryiesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subcategoryiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly title: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.subcategoryies
   */
  export type Category$subcategoryiesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type SubCategorySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type SubCategoryMinAggregateOutputType = {
    id: number | null
    title: string | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubCategoryCountAggregateOutputType = {
    id: number
    title: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubCategoryAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type SubCategorySumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type SubCategoryMinAggregateInputType = {
    id?: true
    title?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    id?: true
    title?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubCategoryCountAggregateInputType = {
    id?: true
    title?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _avg?: SubCategoryAvgAggregateInputType
    _sum?: SubCategorySumAggregateInputType
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    id: number
    title: string
    categoryId: number
    createdAt: Date
    updatedAt: Date
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | SubCategory$postArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectScalar = {
    id?: boolean
    title?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubCategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    post?: boolean | SubCategory$postArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SubCategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      title: string
      categoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subCategory"]>
    composites: {}
  }


  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SubCategoryFindManyArgs, 'select' | 'include'> & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SubCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
    **/
    create<T extends SubCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SubCategories.
     *     @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     *     @example
     *     // Create many SubCategories
     *     const subCategory = await prisma.subCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
    **/
    delete<T extends SubCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
    **/
    upsert<T extends SubCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends SubCategory$postArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SubCategory model
   */ 
  interface SubCategoryFieldRefs {
    readonly id: FieldRef<"SubCategory", 'Int'>
    readonly title: FieldRef<"SubCategory", 'String'>
    readonly categoryId: FieldRef<"SubCategory", 'Int'>
    readonly createdAt: FieldRef<"SubCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"SubCategory", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }


  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
  }


  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }


  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
  }


  /**
   * SubCategory.post
   */
  export type SubCategory$postArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    subcategoryId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    subcategoryId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    contents: string | null
    img: string | null
    categoryId: number | null
    subcategoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    contents: string | null
    img: string | null
    categoryId: number | null
    subcategoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    contents: number
    img: number
    categoryId: number
    subcategoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    categoryId?: true
    subcategoryId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    categoryId?: true
    subcategoryId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    contents?: true
    img?: true
    categoryId?: true
    subcategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    contents?: true
    img?: true
    categoryId?: true
    subcategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    contents?: true
    img?: true
    categoryId?: true
    subcategoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    contents: string
    img: string
    categoryId: number
    subcategoryId: number
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    contents?: boolean
    img?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subcategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    contents?: boolean
    img?: boolean
    categoryId?: boolean
    subcategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      subcategory: Prisma.$SubCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      title: string
      contents: string
      img: string
      categoryId: number
      subcategoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subcategory<T extends SubCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoryDefaultArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly contents: FieldRef<"Post", 'String'>
    readonly img: FieldRef<"Post", 'String'>
    readonly categoryId: FieldRef<"Post", 'Int'>
    readonly subcategoryId: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    contents: 'contents',
    img: 'img',
    categoryId: 'categoryId',
    subcategoryId: 'subcategoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    password?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
  }, "id">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    password?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    title?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    subcategoryies?: SubCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subcategoryies?: SubCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    title?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    subcategoryies?: SubCategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    title?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    title?: StringFilter<"SubCategory"> | string
    categoryId?: IntFilter<"SubCategory"> | number
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    post?: PostListRelationFilter
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type SubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    title?: StringFilter<"SubCategory"> | string
    categoryId?: IntFilter<"SubCategory"> | number
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    post?: PostListRelationFilter
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "id">

  export type SubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _avg?: SubCategoryAvgOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
    _sum?: SubCategorySumOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubCategory"> | number
    title?: StringWithAggregatesFilter<"SubCategory"> | string
    categoryId?: IntWithAggregatesFilter<"SubCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    contents?: StringFilter<"Post"> | string
    img?: StringFilter<"Post"> | string
    categoryId?: IntFilter<"Post"> | number
    subcategoryId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    subcategory?: XOR<SubCategoryRelationFilter, SubCategoryWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    img?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subcategory?: SubCategoryOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    contents?: StringFilter<"Post"> | string
    img?: StringFilter<"Post"> | string
    categoryId?: IntFilter<"Post"> | number
    subcategoryId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    subcategory?: XOR<SubCategoryRelationFilter, SubCategoryWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    img?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    contents?: StringWithAggregatesFilter<"Post"> | string
    img?: StringWithAggregatesFilter<"Post"> | string
    categoryId?: IntWithAggregatesFilter<"Post"> | number
    subcategoryId?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type AdminCreateInput = {
    password: string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    password: string
  }

  export type AdminUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: number
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategoryies?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategoryies?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategoryies?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategoryies?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostCreateNestedManyWithoutSubcategoryInput
    category: CategoryCreateNestedOneWithoutSubcategoryiesInput
  }

  export type SubCategoryUncheckedCreateInput = {
    id?: number
    title: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubCategoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateManyWithoutSubcategoryNestedInput
    category?: CategoryUpdateOneRequiredWithoutSubcategoryiesNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubCategoryCreateManyInput = {
    id?: number
    title: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    title: string
    contents: string
    img: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subcategory: SubCategoryCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    contents: string
    img: string
    categoryId: number
    subcategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategory?: SubCategoryUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    subcategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    contents: string
    img: string
    categoryId: number
    subcategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    subcategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubCategorySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type SubCategoryRelationFilter = {
    is?: SubCategoryWhereInput
    isNot?: SubCategoryWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    img?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    img?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    img?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    subcategoryId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type PostCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<PostCreateWithoutSubcategoryInput, PostUncheckedCreateWithoutSubcategoryInput> | PostCreateWithoutSubcategoryInput[] | PostUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubcategoryInput | PostCreateOrConnectWithoutSubcategoryInput[]
    createMany?: PostCreateManySubcategoryInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutSubcategoryiesInput = {
    create?: XOR<CategoryCreateWithoutSubcategoryiesInput, CategoryUncheckedCreateWithoutSubcategoryiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoryiesInput
    connect?: CategoryWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<PostCreateWithoutSubcategoryInput, PostUncheckedCreateWithoutSubcategoryInput> | PostCreateWithoutSubcategoryInput[] | PostUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubcategoryInput | PostCreateOrConnectWithoutSubcategoryInput[]
    createMany?: PostCreateManySubcategoryInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<PostCreateWithoutSubcategoryInput, PostUncheckedCreateWithoutSubcategoryInput> | PostCreateWithoutSubcategoryInput[] | PostUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubcategoryInput | PostCreateOrConnectWithoutSubcategoryInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSubcategoryInput | PostUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: PostCreateManySubcategoryInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSubcategoryInput | PostUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSubcategoryInput | PostUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSubcategoryiesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubcategoryiesInput, CategoryUncheckedCreateWithoutSubcategoryiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoryiesInput
    upsert?: CategoryUpsertWithoutSubcategoryiesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubcategoryiesInput, CategoryUpdateWithoutSubcategoryiesInput>, CategoryUncheckedUpdateWithoutSubcategoryiesInput>
  }

  export type PostUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<PostCreateWithoutSubcategoryInput, PostUncheckedCreateWithoutSubcategoryInput> | PostCreateWithoutSubcategoryInput[] | PostUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubcategoryInput | PostCreateOrConnectWithoutSubcategoryInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSubcategoryInput | PostUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: PostCreateManySubcategoryInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSubcategoryInput | PostUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSubcategoryInput | PostUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SubCategoryCreateNestedOneWithoutPostInput = {
    create?: XOR<SubCategoryCreateWithoutPostInput, SubCategoryUncheckedCreateWithoutPostInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutPostInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type SubCategoryUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<SubCategoryCreateWithoutPostInput, SubCategoryUncheckedCreateWithoutPostInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutPostInput
    upsert?: SubCategoryUpsertWithoutPostInput
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutPostInput, SubCategoryUpdateWithoutPostInput>, SubCategoryUncheckedUpdateWithoutPostInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SubCategoryCreateWithoutCategoryInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostCreateNestedManyWithoutSubcategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryCreateManyCategoryInputEnvelope = {
    data: SubCategoryCreateManyCategoryInput | SubCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    title?: StringFilter<"SubCategory"> | string
    categoryId?: IntFilter<"SubCategory"> | number
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
  }

  export type PostCreateWithoutSubcategoryInput = {
    title: string
    contents: string
    img: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutSubcategoryInput = {
    id?: number
    title: string
    contents: string
    img: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutSubcategoryInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSubcategoryInput, PostUncheckedCreateWithoutSubcategoryInput>
  }

  export type PostCreateManySubcategoryInputEnvelope = {
    data: PostCreateManySubcategoryInput | PostCreateManySubcategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutSubcategoryiesInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutSubcategoryiesInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutSubcategoryiesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubcategoryiesInput, CategoryUncheckedCreateWithoutSubcategoryiesInput>
  }

  export type PostUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutSubcategoryInput, PostUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<PostCreateWithoutSubcategoryInput, PostUncheckedCreateWithoutSubcategoryInput>
  }

  export type PostUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutSubcategoryInput, PostUncheckedUpdateWithoutSubcategoryInput>
  }

  export type PostUpdateManyWithWhereWithoutSubcategoryInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    contents?: StringFilter<"Post"> | string
    img?: StringFilter<"Post"> | string
    categoryId?: IntFilter<"Post"> | number
    subcategoryId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type CategoryUpsertWithoutSubcategoryiesInput = {
    update: XOR<CategoryUpdateWithoutSubcategoryiesInput, CategoryUncheckedUpdateWithoutSubcategoryiesInput>
    create: XOR<CategoryCreateWithoutSubcategoryiesInput, CategoryUncheckedCreateWithoutSubcategoryiesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubcategoryiesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubcategoryiesInput, CategoryUncheckedUpdateWithoutSubcategoryiesInput>
  }

  export type CategoryUpdateWithoutSubcategoryiesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutSubcategoryiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateWithoutPostInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSubcategoryiesInput
  }

  export type SubCategoryUncheckedCreateWithoutPostInput = {
    id?: number
    title: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryCreateOrConnectWithoutPostInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutPostInput, SubCategoryUncheckedCreateWithoutPostInput>
  }

  export type SubCategoryUpsertWithoutPostInput = {
    update: XOR<SubCategoryUpdateWithoutPostInput, SubCategoryUncheckedUpdateWithoutPostInput>
    create: XOR<SubCategoryCreateWithoutPostInput, SubCategoryUncheckedCreateWithoutPostInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutPostInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutPostInput, SubCategoryUncheckedUpdateWithoutPostInput>
  }

  export type SubCategoryUpdateWithoutPostInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSubcategoryiesNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateManyCategoryInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubCategoryUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManySubcategoryInput = {
    id?: number
    title: string
    contents: string
    img: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutSubcategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubCategoryDefaultArgs instead
     */
    export type SubCategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SubCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}