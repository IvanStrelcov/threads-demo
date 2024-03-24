
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Thread
 * 
 */
export type Thread = $Result.DefaultSelection<Prisma.$ThreadPayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model Invite
 * 
 */
export type Invite = $Result.DefaultSelection<Prisma.$InvitePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  CANCELED: 'CANCELED',
  EXPIRED: 'EXPIRED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): Prisma.ThreadDelegate<ExtArgs>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs>;

  /**
   * `prisma.invite`: Exposes CRUD operations for the **Invite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invites
    * const invites = await prisma.invite.findMany()
    * ```
    */
  get invite(): Prisma.InviteDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
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
    User: 'User',
    Thread: 'Thread',
    Community: 'Community',
    Request: 'Request',
    Invite: 'Invite'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'thread' | 'community' | 'request' | 'invite'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Thread: {
        payload: Prisma.$ThreadPayload<ExtArgs>
        fields: Prisma.ThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThreadFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThreadFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findFirst: {
            args: Prisma.ThreadFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThreadFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findMany: {
            args: Prisma.ThreadFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          create: {
            args: Prisma.ThreadCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          createMany: {
            args: Prisma.ThreadCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ThreadDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          update: {
            args: Prisma.ThreadUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          deleteMany: {
            args: Prisma.ThreadDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ThreadUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ThreadUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          aggregate: {
            args: Prisma.ThreadAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateThread>
          }
          groupBy: {
            args: Prisma.ThreadGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ThreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThreadCountArgs<ExtArgs>,
            result: $Utils.Optional<ThreadCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>,
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>,
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      Invite: {
        payload: Prisma.$InvitePayload<ExtArgs>
        fields: Prisma.InviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findFirst: {
            args: Prisma.InviteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findMany: {
            args: Prisma.InviteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          create: {
            args: Prisma.InviteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          createMany: {
            args: Prisma.InviteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InviteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          update: {
            args: Prisma.InviteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          deleteMany: {
            args: Prisma.InviteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InviteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InviteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          aggregate: {
            args: Prisma.InviteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvite>
          }
          groupBy: {
            args: Prisma.InviteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCountArgs<ExtArgs>,
            result: $Utils.Optional<InviteCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    threads: number
    communityLeader: number
    communityMember: number
    requests: number
    invites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    threads?: boolean | UserCountOutputTypeCountThreadsArgs
    communityLeader?: boolean | UserCountOutputTypeCountCommunityLeaderArgs
    communityMember?: boolean | UserCountOutputTypeCountCommunityMemberArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    invites?: boolean | UserCountOutputTypeCountInvitesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThreadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunityLeaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunityMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
  }



  /**
   * Count Type ThreadCountOutputType
   */

  export type ThreadCountOutputType = {
    children: number
  }

  export type ThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | ThreadCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadCountOutputType
     */
    select?: ThreadCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }



  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    members: number
    threads: number
    requests: number
    invites: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CommunityCountOutputTypeCountMembersArgs
    threads?: boolean | CommunityCountOutputTypeCountThreadsArgs
    requests?: boolean | CommunityCountOutputTypeCountRequestsArgs
    invites?: boolean | CommunityCountOutputTypeCountInvitesArgs
  }

  // Custom InputTypes

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountThreadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    activeCommunity: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    activeCommunity: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    image: string | null
    bio: string | null
    onboarded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    activeCommunity: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    image: string | null
    bio: string | null
    onboarded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    activeCommunity: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    username: number
    email: number
    password: number
    image: number
    bio: number
    onboarded: number
    createdAt: number
    updatedAt: number
    activeCommunity: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    activeCommunity?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    activeCommunity?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    username?: true
    email?: true
    password?: true
    image?: true
    bio?: true
    onboarded?: true
    createdAt?: true
    updatedAt?: true
    activeCommunity?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    username?: true
    email?: true
    password?: true
    image?: true
    bio?: true
    onboarded?: true
    createdAt?: true
    updatedAt?: true
    activeCommunity?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    username?: true
    email?: true
    password?: true
    image?: true
    bio?: true
    onboarded?: true
    createdAt?: true
    updatedAt?: true
    activeCommunity?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    uuid: string
    name: string | null
    username: string | null
    email: string
    password: string
    image: string | null
    bio: string | null
    onboarded: boolean
    createdAt: Date
    updatedAt: Date
    activeCommunity: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    bio?: boolean
    onboarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activeCommunity?: boolean
    threads?: boolean | User$threadsArgs<ExtArgs>
    communityLeader?: boolean | User$communityLeaderArgs<ExtArgs>
    communityMember?: boolean | User$communityMemberArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    invites?: boolean | User$invitesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    bio?: boolean
    onboarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activeCommunity?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    threads?: boolean | User$threadsArgs<ExtArgs>
    communityLeader?: boolean | User$communityLeaderArgs<ExtArgs>
    communityMember?: boolean | User$communityMemberArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    invites?: boolean | User$invitesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      threads: Prisma.$ThreadPayload<ExtArgs>[]
      communityLeader: Prisma.$CommunityPayload<ExtArgs>[]
      communityMember: Prisma.$CommunityPayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
      invites: Prisma.$InvitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      name: string | null
      username: string | null
      email: string
      password: string
      image: string | null
      bio: string | null
      onboarded: boolean
      createdAt: Date
      updatedAt: Date
      activeCommunity: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    threads<T extends User$threadsArgs<ExtArgs> = {}>(args?: Subset<T, User$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findMany'> | Null>;

    communityLeader<T extends User$communityLeaderArgs<ExtArgs> = {}>(args?: Subset<T, User$communityLeaderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'> | Null>;

    communityMember<T extends User$communityMemberArgs<ExtArgs> = {}>(args?: Subset<T, User$communityMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'> | Null>;

    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    invites<T extends User$invitesArgs<ExtArgs> = {}>(args?: Subset<T, User$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly uuid: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly onboarded: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly activeCommunity: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.threads
   */
  export type User$threadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * User.communityLeader
   */
  export type User$communityLeaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * User.communityMember
   */
  export type User$communityMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * User.invites
   */
  export type User$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Thread
   */

  export type AggregateThread = {
    _count: ThreadCountAggregateOutputType | null
    _avg: ThreadAvgAggregateOutputType | null
    _sum: ThreadSumAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  export type ThreadAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    communityId: number | null
    parentId: number | null
  }

  export type ThreadSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    communityId: number | null
    parentId: number | null
  }

  export type ThreadMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    authorId: number | null
    communityId: number | null
    parentId: number | null
  }

  export type ThreadMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    authorId: number | null
    communityId: number | null
    parentId: number | null
  }

  export type ThreadCountAggregateOutputType = {
    id: number
    uuid: number
    createdAt: number
    updatedAt: number
    content: number
    authorId: number
    communityId: number
    parentId: number
    _all: number
  }


  export type ThreadAvgAggregateInputType = {
    id?: true
    authorId?: true
    communityId?: true
    parentId?: true
  }

  export type ThreadSumAggregateInputType = {
    id?: true
    authorId?: true
    communityId?: true
    parentId?: true
  }

  export type ThreadMinAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    authorId?: true
    communityId?: true
    parentId?: true
  }

  export type ThreadMaxAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    authorId?: true
    communityId?: true
    parentId?: true
  }

  export type ThreadCountAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    authorId?: true
    communityId?: true
    parentId?: true
    _all?: true
  }

  export type ThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thread to aggregate.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Threads
    **/
    _count?: true | ThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThreadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThreadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadMaxAggregateInputType
  }

  export type GetThreadAggregateType<T extends ThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThread[P]>
      : GetScalarType<T[P], AggregateThread[P]>
  }




  export type ThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithAggregationInput | ThreadOrderByWithAggregationInput[]
    by: ThreadScalarFieldEnum[] | ThreadScalarFieldEnum
    having?: ThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadCountAggregateInputType | true
    _avg?: ThreadAvgAggregateInputType
    _sum?: ThreadSumAggregateInputType
    _min?: ThreadMinAggregateInputType
    _max?: ThreadMaxAggregateInputType
  }

  export type ThreadGroupByOutputType = {
    id: number
    uuid: string
    createdAt: Date
    updatedAt: Date
    content: string
    authorId: number | null
    communityId: number | null
    parentId: number | null
    _count: ThreadCountAggregateOutputType | null
    _avg: ThreadAvgAggregateOutputType | null
    _sum: ThreadSumAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  type GetThreadGroupByPayload<T extends ThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadGroupByOutputType[P]>
        }
      >
    >


  export type ThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    authorId?: boolean
    communityId?: boolean
    parentId?: boolean
    author?: boolean | Thread$authorArgs<ExtArgs>
    community?: boolean | Thread$communityArgs<ExtArgs>
    parent?: boolean | Thread$parentArgs<ExtArgs>
    children?: boolean | Thread$childrenArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectScalar = {
    id?: boolean
    uuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    authorId?: boolean
    communityId?: boolean
    parentId?: boolean
  }

  export type ThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Thread$authorArgs<ExtArgs>
    community?: boolean | Thread$communityArgs<ExtArgs>
    parent?: boolean | Thread$parentArgs<ExtArgs>
    children?: boolean | Thread$childrenArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thread"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
      community: Prisma.$CommunityPayload<ExtArgs> | null
      parent: Prisma.$ThreadPayload<ExtArgs> | null
      children: Prisma.$ThreadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      createdAt: Date
      updatedAt: Date
      content: string
      authorId: number | null
      communityId: number | null
      parentId: number | null
    }, ExtArgs["result"]["thread"]>
    composites: {}
  }


  type ThreadGetPayload<S extends boolean | null | undefined | ThreadDefaultArgs> = $Result.GetResult<Prisma.$ThreadPayload, S>

  type ThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ThreadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ThreadCountAggregateInputType | true
    }

  export interface ThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thread'], meta: { name: 'Thread' } }
    /**
     * Find zero or one Thread that matches the filter.
     * @param {ThreadFindUniqueArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThreadFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadFindUniqueArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Thread that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ThreadFindUniqueOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThreadFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Thread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThreadFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadFindFirstArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Thread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThreadFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Threads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Threads
     * const threads = await prisma.thread.findMany()
     * 
     * // Get first 10 Threads
     * const threads = await prisma.thread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threadWithIdOnly = await prisma.thread.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ThreadFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Thread.
     * @param {ThreadCreateArgs} args - Arguments to create a Thread.
     * @example
     * // Create one Thread
     * const Thread = await prisma.thread.create({
     *   data: {
     *     // ... data to create a Thread
     *   }
     * })
     * 
    **/
    create<T extends ThreadCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadCreateArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Threads.
     *     @param {ThreadCreateManyArgs} args - Arguments to create many Threads.
     *     @example
     *     // Create many Threads
     *     const thread = await prisma.thread.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ThreadCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Thread.
     * @param {ThreadDeleteArgs} args - Arguments to delete one Thread.
     * @example
     * // Delete one Thread
     * const Thread = await prisma.thread.delete({
     *   where: {
     *     // ... filter to delete one Thread
     *   }
     * })
     * 
    **/
    delete<T extends ThreadDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadDeleteArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Thread.
     * @param {ThreadUpdateArgs} args - Arguments to update one Thread.
     * @example
     * // Update one Thread
     * const thread = await prisma.thread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThreadUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadUpdateArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Threads.
     * @param {ThreadDeleteManyArgs} args - Arguments to filter Threads to delete.
     * @example
     * // Delete a few Threads
     * const { count } = await prisma.thread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThreadDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThreadUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Thread.
     * @param {ThreadUpsertArgs} args - Arguments to update or create a Thread.
     * @example
     * // Update or create a Thread
     * const thread = await prisma.thread.upsert({
     *   create: {
     *     // ... data to create a Thread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thread we want to update
     *   }
     * })
    **/
    upsert<T extends ThreadUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadUpsertArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadCountArgs} args - Arguments to filter Threads to count.
     * @example
     * // Count the number of Threads
     * const count = await prisma.thread.count({
     *   where: {
     *     // ... the filter for the Threads we want to count
     *   }
     * })
    **/
    count<T extends ThreadCountArgs>(
      args?: Subset<T, ThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThreadAggregateArgs>(args: Subset<T, ThreadAggregateArgs>): Prisma.PrismaPromise<GetThreadAggregateType<T>>

    /**
     * Group by Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadGroupByArgs} args - Group by arguments.
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
      T extends ThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadGroupByArgs['orderBy'] }
        : { orderBy?: ThreadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thread model
   */
  readonly fields: ThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends Thread$authorArgs<ExtArgs> = {}>(args?: Subset<T, Thread$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    community<T extends Thread$communityArgs<ExtArgs> = {}>(args?: Subset<T, Thread$communityArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    parent<T extends Thread$parentArgs<ExtArgs> = {}>(args?: Subset<T, Thread$parentArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    children<T extends Thread$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Thread$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Thread model
   */ 
  interface ThreadFieldRefs {
    readonly id: FieldRef<"Thread", 'Int'>
    readonly uuid: FieldRef<"Thread", 'String'>
    readonly createdAt: FieldRef<"Thread", 'DateTime'>
    readonly updatedAt: FieldRef<"Thread", 'DateTime'>
    readonly content: FieldRef<"Thread", 'String'>
    readonly authorId: FieldRef<"Thread", 'Int'>
    readonly communityId: FieldRef<"Thread", 'Int'>
    readonly parentId: FieldRef<"Thread", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Thread findUnique
   */
  export type ThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread findUniqueOrThrow
   */
  export type ThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread findFirst
   */
  export type ThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * Thread findFirstOrThrow
   */
  export type ThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * Thread findMany
   */
  export type ThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Threads to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * Thread create
   */
  export type ThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a Thread.
     */
    data: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
  }


  /**
   * Thread createMany
   */
  export type ThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Threads.
     */
    data: ThreadCreateManyInput | ThreadCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Thread update
   */
  export type ThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a Thread.
     */
    data: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
    /**
     * Choose, which Thread to update.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread updateMany
   */
  export type ThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
  }


  /**
   * Thread upsert
   */
  export type ThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the Thread to update in case it exists.
     */
    where: ThreadWhereUniqueInput
    /**
     * In case the Thread found by the `where` argument doesn't exist, create a new Thread with this data.
     */
    create: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
    /**
     * In case the Thread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
  }


  /**
   * Thread delete
   */
  export type ThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter which Thread to delete.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread deleteMany
   */
  export type ThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Threads to delete
     */
    where?: ThreadWhereInput
  }


  /**
   * Thread.author
   */
  export type Thread$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Thread.community
   */
  export type Thread$communityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
  }


  /**
   * Thread.parent
   */
  export type Thread$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
  }


  /**
   * Thread.children
   */
  export type Thread$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * Thread without action
   */
  export type ThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
  }



  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type CommunitySumAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type CommunityMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    username: string | null
    image: string | null
    bio: string | null
    creatorId: number | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    username: string | null
    image: string | null
    bio: string | null
    creatorId: number | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    uuid: number
    createdAt: number
    updatedAt: number
    name: number
    username: number
    image: number
    bio: number
    creatorId: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type CommunitySumAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    username?: true
    image?: true
    bio?: true
    creatorId?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    username?: true
    image?: true
    bio?: true
    creatorId?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    uuid?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    username?: true
    image?: true
    bio?: true
    creatorId?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: number
    uuid: string
    createdAt: Date
    updatedAt: Date
    name: string | null
    username: string | null
    image: string | null
    bio: string | null
    creatorId: number | null
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    username?: boolean
    image?: boolean
    bio?: boolean
    creatorId?: boolean
    createdBy?: boolean | Community$createdByArgs<ExtArgs>
    members?: boolean | Community$membersArgs<ExtArgs>
    threads?: boolean | Community$threadsArgs<ExtArgs>
    requests?: boolean | Community$requestsArgs<ExtArgs>
    invites?: boolean | Community$invitesArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    uuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    username?: boolean
    image?: boolean
    bio?: boolean
    creatorId?: boolean
  }

  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Community$createdByArgs<ExtArgs>
    members?: boolean | Community$membersArgs<ExtArgs>
    threads?: boolean | Community$threadsArgs<ExtArgs>
    requests?: boolean | Community$requestsArgs<ExtArgs>
    invites?: boolean | Community$invitesArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      members: Prisma.$UserPayload<ExtArgs>[]
      threads: Prisma.$ThreadPayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
      invites: Prisma.$InvitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      createdAt: Date
      updatedAt: Date
      name: string | null
      username: string | null
      image: string | null
      bio: string | null
      creatorId: number | null
    }, ExtArgs["result"]["community"]>
    composites: {}
  }


  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommunityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Community that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommunityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommunityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
    **/
    create<T extends CommunityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Communities.
     *     @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     *     @example
     *     // Create many Communities
     *     const community = await prisma.community.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommunityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
    **/
    delete<T extends CommunityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommunityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommunityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommunityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
    **/
    upsert<T extends CommunityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
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
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    createdBy<T extends Community$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Community$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    members<T extends Community$membersArgs<ExtArgs> = {}>(args?: Subset<T, Community$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    threads<T extends Community$threadsArgs<ExtArgs> = {}>(args?: Subset<T, Community$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findMany'> | Null>;

    requests<T extends Community$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Community$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    invites<T extends Community$invitesArgs<ExtArgs> = {}>(args?: Subset<T, Community$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Community model
   */ 
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'Int'>
    readonly uuid: FieldRef<"Community", 'String'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
    readonly updatedAt: FieldRef<"Community", 'DateTime'>
    readonly name: FieldRef<"Community", 'String'>
    readonly username: FieldRef<"Community", 'String'>
    readonly image: FieldRef<"Community", 'String'>
    readonly bio: FieldRef<"Community", 'String'>
    readonly creatorId: FieldRef<"Community", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }


  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
  }


  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }


  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
  }


  /**
   * Community.createdBy
   */
  export type Community$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Community.members
   */
  export type Community$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Community.threads
   */
  export type Community$threadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * Community.requests
   */
  export type Community$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * Community.invites
   */
  export type Community$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }


  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
  }



  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    communityId: number | null
    userId: number | null
  }

  export type RequestSumAggregateOutputType = {
    communityId: number | null
    userId: number | null
  }

  export type RequestMinAggregateOutputType = {
    uuid: string | null
    createdAt: Date | null
    updatedat: Date | null
    status: $Enums.Status | null
    communityId: number | null
    userId: number | null
  }

  export type RequestMaxAggregateOutputType = {
    uuid: string | null
    createdAt: Date | null
    updatedat: Date | null
    status: $Enums.Status | null
    communityId: number | null
    userId: number | null
  }

  export type RequestCountAggregateOutputType = {
    uuid: number
    createdAt: number
    updatedat: number
    status: number
    communityId: number
    userId: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    communityId?: true
    userId?: true
  }

  export type RequestSumAggregateInputType = {
    communityId?: true
    userId?: true
  }

  export type RequestMinAggregateInputType = {
    uuid?: true
    createdAt?: true
    updatedat?: true
    status?: true
    communityId?: true
    userId?: true
  }

  export type RequestMaxAggregateInputType = {
    uuid?: true
    createdAt?: true
    updatedat?: true
    status?: true
    communityId?: true
    userId?: true
  }

  export type RequestCountAggregateInputType = {
    uuid?: true
    createdAt?: true
    updatedat?: true
    status?: true
    communityId?: true
    userId?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    uuid: string
    createdAt: Date
    updatedat: Date
    status: $Enums.Status
    communityId: number
    userId: number
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    createdAt?: boolean
    updatedat?: boolean
    status?: boolean
    communityId?: boolean
    userId?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    uuid?: boolean
    createdAt?: boolean
    updatedat?: boolean
    status?: boolean
    communityId?: boolean
    userId?: boolean
  }

  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      createdAt: Date
      updatedat: Date
      status: $Enums.Status
      communityId: number
      userId: number
    }, ExtArgs["result"]["request"]>
    composites: {}
  }


  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Request that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const requestWithUuidOnly = await prisma.request.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends RequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
    **/
    create<T extends RequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RequestCreateArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Requests.
     *     @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     *     @example
     *     // Create many Requests
     *     const request = await prisma.request.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
    **/
    delete<T extends RequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
    **/
    upsert<T extends RequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>
    ): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
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
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Request model
   */ 
  interface RequestFieldRefs {
    readonly uuid: FieldRef<"Request", 'String'>
    readonly createdAt: FieldRef<"Request", 'DateTime'>
    readonly updatedat: FieldRef<"Request", 'DateTime'>
    readonly status: FieldRef<"Request", 'Status'>
    readonly communityId: FieldRef<"Request", 'Int'>
    readonly userId: FieldRef<"Request", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }


  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }


  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
  }


  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }


  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }


  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
  }


  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RequestInclude<ExtArgs> | null
  }



  /**
   * Model Invite
   */

  export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null
    _avg: InviteAvgAggregateOutputType | null
    _sum: InviteSumAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  export type InviteAvgAggregateOutputType = {
    communityId: number | null
    userId: number | null
  }

  export type InviteSumAggregateOutputType = {
    communityId: number | null
    userId: number | null
  }

  export type InviteMinAggregateOutputType = {
    uuid: string | null
    createdAt: Date | null
    updatedat: Date | null
    status: $Enums.Status | null
    communityId: number | null
    userId: number | null
  }

  export type InviteMaxAggregateOutputType = {
    uuid: string | null
    createdAt: Date | null
    updatedat: Date | null
    status: $Enums.Status | null
    communityId: number | null
    userId: number | null
  }

  export type InviteCountAggregateOutputType = {
    uuid: number
    createdAt: number
    updatedat: number
    status: number
    communityId: number
    userId: number
    _all: number
  }


  export type InviteAvgAggregateInputType = {
    communityId?: true
    userId?: true
  }

  export type InviteSumAggregateInputType = {
    communityId?: true
    userId?: true
  }

  export type InviteMinAggregateInputType = {
    uuid?: true
    createdAt?: true
    updatedat?: true
    status?: true
    communityId?: true
    userId?: true
  }

  export type InviteMaxAggregateInputType = {
    uuid?: true
    createdAt?: true
    updatedat?: true
    status?: true
    communityId?: true
    userId?: true
  }

  export type InviteCountAggregateInputType = {
    uuid?: true
    createdAt?: true
    updatedat?: true
    status?: true
    communityId?: true
    userId?: true
    _all?: true
  }

  export type InviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invite to aggregate.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invites
    **/
    _count?: true | InviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InviteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InviteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteMaxAggregateInputType
  }

  export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
        [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvite[P]>
      : GetScalarType<T[P], AggregateInvite[P]>
  }




  export type InviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithAggregationInput | InviteOrderByWithAggregationInput[]
    by: InviteScalarFieldEnum[] | InviteScalarFieldEnum
    having?: InviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCountAggregateInputType | true
    _avg?: InviteAvgAggregateInputType
    _sum?: InviteSumAggregateInputType
    _min?: InviteMinAggregateInputType
    _max?: InviteMaxAggregateInputType
  }

  export type InviteGroupByOutputType = {
    uuid: string
    createdAt: Date
    updatedat: Date
    status: $Enums.Status
    communityId: number
    userId: number
    _count: InviteCountAggregateOutputType | null
    _avg: InviteAvgAggregateOutputType | null
    _sum: InviteSumAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  type GetInviteGroupByPayload<T extends InviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteGroupByOutputType[P]>
            : GetScalarType<T[P], InviteGroupByOutputType[P]>
        }
      >
    >


  export type InviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    createdAt?: boolean
    updatedat?: boolean
    status?: boolean
    communityId?: boolean
    userId?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>

  export type InviteSelectScalar = {
    uuid?: boolean
    createdAt?: boolean
    updatedat?: boolean
    status?: boolean
    communityId?: boolean
    userId?: boolean
  }

  export type InviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $InvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invite"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      createdAt: Date
      updatedat: Date
      status: $Enums.Status
      communityId: number
      userId: number
    }, ExtArgs["result"]["invite"]>
    composites: {}
  }


  type InviteGetPayload<S extends boolean | null | undefined | InviteDefaultArgs> = $Result.GetResult<Prisma.$InvitePayload, S>

  type InviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InviteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InviteCountAggregateInputType | true
    }

  export interface InviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invite'], meta: { name: 'Invite' } }
    /**
     * Find zero or one Invite that matches the filter.
     * @param {InviteFindUniqueArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InviteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InviteFindUniqueArgs<ExtArgs>>
    ): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Invite that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InviteFindUniqueOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InviteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Invite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InviteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteFindFirstArgs<ExtArgs>>
    ): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Invite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InviteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invite.findMany()
     * 
     * // Get first 10 Invites
     * const invites = await prisma.invite.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const inviteWithUuidOnly = await prisma.invite.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends InviteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Invite.
     * @param {InviteCreateArgs} args - Arguments to create a Invite.
     * @example
     * // Create one Invite
     * const Invite = await prisma.invite.create({
     *   data: {
     *     // ... data to create a Invite
     *   }
     * })
     * 
    **/
    create<T extends InviteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InviteCreateArgs<ExtArgs>>
    ): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Invites.
     *     @param {InviteCreateManyArgs} args - Arguments to create many Invites.
     *     @example
     *     // Create many Invites
     *     const invite = await prisma.invite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InviteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invite.
     * @param {InviteDeleteArgs} args - Arguments to delete one Invite.
     * @example
     * // Delete one Invite
     * const Invite = await prisma.invite.delete({
     *   where: {
     *     // ... filter to delete one Invite
     *   }
     * })
     * 
    **/
    delete<T extends InviteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InviteDeleteArgs<ExtArgs>>
    ): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Invite.
     * @param {InviteUpdateArgs} args - Arguments to update one Invite.
     * @example
     * // Update one Invite
     * const invite = await prisma.invite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InviteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InviteUpdateArgs<ExtArgs>>
    ): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Invites.
     * @param {InviteDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InviteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InviteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InviteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invite.
     * @param {InviteUpsertArgs} args - Arguments to update or create a Invite.
     * @example
     * // Update or create a Invite
     * const invite = await prisma.invite.upsert({
     *   create: {
     *     // ... data to create a Invite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invite we want to update
     *   }
     * })
    **/
    upsert<T extends InviteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InviteUpsertArgs<ExtArgs>>
    ): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invite.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends InviteCountArgs>(
      args?: Subset<T, InviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InviteAggregateArgs>(args: Subset<T, InviteAggregateArgs>): Prisma.PrismaPromise<GetInviteAggregateType<T>>

    /**
     * Group by Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteGroupByArgs} args - Group by arguments.
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
      T extends InviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteGroupByArgs['orderBy'] }
        : { orderBy?: InviteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invite model
   */
  readonly fields: InviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Invite model
   */ 
  interface InviteFieldRefs {
    readonly uuid: FieldRef<"Invite", 'String'>
    readonly createdAt: FieldRef<"Invite", 'DateTime'>
    readonly updatedat: FieldRef<"Invite", 'DateTime'>
    readonly status: FieldRef<"Invite", 'Status'>
    readonly communityId: FieldRef<"Invite", 'Int'>
    readonly userId: FieldRef<"Invite", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Invite findUnique
   */
  export type InviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where: InviteWhereUniqueInput
  }


  /**
   * Invite findUniqueOrThrow
   */
  export type InviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where: InviteWhereUniqueInput
  }


  /**
   * Invite findFirst
   */
  export type InviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }


  /**
   * Invite findFirstOrThrow
   */
  export type InviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }


  /**
   * Invite findMany
   */
  export type InviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }


  /**
   * Invite create
   */
  export type InviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The data needed to create a Invite.
     */
    data: XOR<InviteCreateInput, InviteUncheckedCreateInput>
  }


  /**
   * Invite createMany
   */
  export type InviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invites.
     */
    data: InviteCreateManyInput | InviteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Invite update
   */
  export type InviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The data needed to update a Invite.
     */
    data: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
    /**
     * Choose, which Invite to update.
     */
    where: InviteWhereUniqueInput
  }


  /**
   * Invite updateMany
   */
  export type InviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invites.
     */
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InviteWhereInput
  }


  /**
   * Invite upsert
   */
  export type InviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The filter to search for the Invite to update in case it exists.
     */
    where: InviteWhereUniqueInput
    /**
     * In case the Invite found by the `where` argument doesn't exist, create a new Invite with this data.
     */
    create: XOR<InviteCreateInput, InviteUncheckedCreateInput>
    /**
     * In case the Invite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
  }


  /**
   * Invite delete
   */
  export type InviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter which Invite to delete.
     */
    where: InviteWhereUniqueInput
  }


  /**
   * Invite deleteMany
   */
  export type InviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invites to delete
     */
    where?: InviteWhereInput
  }


  /**
   * Invite without action
   */
  export type InviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InviteInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    username: 'username',
    email: 'email',
    password: 'password',
    image: 'image',
    bio: 'bio',
    onboarded: 'onboarded',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    activeCommunity: 'activeCommunity'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ThreadScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    authorId: 'authorId',
    communityId: 'communityId',
    parentId: 'parentId'
  };

  export type ThreadScalarFieldEnum = (typeof ThreadScalarFieldEnum)[keyof typeof ThreadScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    username: 'username',
    image: 'image',
    bio: 'bio',
    creatorId: 'creatorId'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    uuid: 'uuid',
    createdAt: 'createdAt',
    updatedat: 'updatedat',
    status: 'status',
    communityId: 'communityId',
    userId: 'userId'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const InviteScalarFieldEnum: {
    uuid: 'uuid',
    createdAt: 'createdAt',
    updatedat: 'updatedat',
    status: 'status',
    communityId: 'communityId',
    userId: 'userId'
  };

  export type InviteScalarFieldEnum = (typeof InviteScalarFieldEnum)[keyof typeof InviteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    uuid?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    onboarded?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activeCommunity?: IntNullableFilter<"User"> | number | null
    threads?: ThreadListRelationFilter
    communityLeader?: CommunityListRelationFilter
    communityMember?: CommunityListRelationFilter
    requests?: RequestListRelationFilter
    invites?: InviteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    onboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activeCommunity?: SortOrderInput | SortOrder
    threads?: ThreadOrderByRelationAggregateInput
    communityLeader?: CommunityOrderByRelationAggregateInput
    communityMember?: CommunityOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
    invites?: InviteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uuid?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    onboarded?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activeCommunity?: IntNullableFilter<"User"> | number | null
    threads?: ThreadListRelationFilter
    communityLeader?: CommunityListRelationFilter
    communityMember?: CommunityListRelationFilter
    requests?: RequestListRelationFilter
    invites?: InviteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    onboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activeCommunity?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    uuid?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    onboarded?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    activeCommunity?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type ThreadWhereInput = {
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    id?: IntFilter<"Thread"> | number
    uuid?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    content?: StringFilter<"Thread"> | string
    authorId?: IntNullableFilter<"Thread"> | number | null
    communityId?: IntNullableFilter<"Thread"> | number | null
    parentId?: IntNullableFilter<"Thread"> | number | null
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    community?: XOR<CommunityNullableRelationFilter, CommunityWhereInput> | null
    parent?: XOR<ThreadNullableRelationFilter, ThreadWhereInput> | null
    children?: ThreadListRelationFilter
  }

  export type ThreadOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrderInput | SortOrder
    communityId?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    community?: CommunityOrderByWithRelationInput
    parent?: ThreadOrderByWithRelationInput
    children?: ThreadOrderByRelationAggregateInput
  }

  export type ThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    uuid?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    content?: StringFilter<"Thread"> | string
    authorId?: IntNullableFilter<"Thread"> | number | null
    communityId?: IntNullableFilter<"Thread"> | number | null
    parentId?: IntNullableFilter<"Thread"> | number | null
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    community?: XOR<CommunityNullableRelationFilter, CommunityWhereInput> | null
    parent?: XOR<ThreadNullableRelationFilter, ThreadWhereInput> | null
    children?: ThreadListRelationFilter
  }, "id">

  export type ThreadOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrderInput | SortOrder
    communityId?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: ThreadCountOrderByAggregateInput
    _avg?: ThreadAvgOrderByAggregateInput
    _max?: ThreadMaxOrderByAggregateInput
    _min?: ThreadMinOrderByAggregateInput
    _sum?: ThreadSumOrderByAggregateInput
  }

  export type ThreadScalarWhereWithAggregatesInput = {
    AND?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    OR?: ThreadScalarWhereWithAggregatesInput[]
    NOT?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Thread"> | number
    uuid?: StringWithAggregatesFilter<"Thread"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
    content?: StringWithAggregatesFilter<"Thread"> | string
    authorId?: IntNullableWithAggregatesFilter<"Thread"> | number | null
    communityId?: IntNullableWithAggregatesFilter<"Thread"> | number | null
    parentId?: IntNullableWithAggregatesFilter<"Thread"> | number | null
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: IntFilter<"Community"> | number
    uuid?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    name?: StringNullableFilter<"Community"> | string | null
    username?: StringNullableFilter<"Community"> | string | null
    image?: StringNullableFilter<"Community"> | string | null
    bio?: StringNullableFilter<"Community"> | string | null
    creatorId?: IntNullableFilter<"Community"> | number | null
    createdBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    members?: UserListRelationFilter
    threads?: ThreadListRelationFilter
    requests?: RequestListRelationFilter
    invites?: InviteListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
    threads?: ThreadOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
    invites?: InviteOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    uuid?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    name?: StringNullableFilter<"Community"> | string | null
    username?: StringNullableFilter<"Community"> | string | null
    image?: StringNullableFilter<"Community"> | string | null
    bio?: StringNullableFilter<"Community"> | string | null
    creatorId?: IntNullableFilter<"Community"> | number | null
    createdBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    members?: UserListRelationFilter
    threads?: ThreadListRelationFilter
    requests?: RequestListRelationFilter
    invites?: InviteListRelationFilter
  }, "id">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Community"> | number
    uuid?: StringWithAggregatesFilter<"Community"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    name?: StringNullableWithAggregatesFilter<"Community"> | string | null
    username?: StringNullableWithAggregatesFilter<"Community"> | string | null
    image?: StringNullableWithAggregatesFilter<"Community"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Community"> | string | null
    creatorId?: IntNullableWithAggregatesFilter<"Community"> | number | null
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    uuid?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedat?: DateTimeFilter<"Request"> | Date | string
    status?: EnumStatusFilter<"Request"> | $Enums.Status
    communityId?: IntFilter<"Request"> | number
    userId?: IntFilter<"Request"> | number
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RequestOrderByWithRelationInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedat?: SortOrder
    status?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    community?: CommunityOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    communityId_userId?: RequestCommunityIdUserIdCompoundUniqueInput
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    uuid?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedat?: DateTimeFilter<"Request"> | Date | string
    status?: EnumStatusFilter<"Request"> | $Enums.Status
    communityId?: IntFilter<"Request"> | number
    userId?: IntFilter<"Request"> | number
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "communityId_userId">

  export type RequestOrderByWithAggregationInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedat?: SortOrder
    status?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _avg?: RequestAvgOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
    _sum?: RequestSumOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Request"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Request"> | $Enums.Status
    communityId?: IntWithAggregatesFilter<"Request"> | number
    userId?: IntWithAggregatesFilter<"Request"> | number
  }

  export type InviteWhereInput = {
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    uuid?: StringFilter<"Invite"> | string
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    updatedat?: DateTimeFilter<"Invite"> | Date | string
    status?: EnumStatusFilter<"Invite"> | $Enums.Status
    communityId?: IntFilter<"Invite"> | number
    userId?: IntFilter<"Invite"> | number
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type InviteOrderByWithRelationInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedat?: SortOrder
    status?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    community?: CommunityOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type InviteWhereUniqueInput = Prisma.AtLeast<{
    communityId_userId?: InviteCommunityIdUserIdCompoundUniqueInput
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    uuid?: StringFilter<"Invite"> | string
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    updatedat?: DateTimeFilter<"Invite"> | Date | string
    status?: EnumStatusFilter<"Invite"> | $Enums.Status
    communityId?: IntFilter<"Invite"> | number
    userId?: IntFilter<"Invite"> | number
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "communityId_userId">

  export type InviteOrderByWithAggregationInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedat?: SortOrder
    status?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    _count?: InviteCountOrderByAggregateInput
    _avg?: InviteAvgOrderByAggregateInput
    _max?: InviteMaxOrderByAggregateInput
    _min?: InviteMinOrderByAggregateInput
    _sum?: InviteSumOrderByAggregateInput
  }

  export type InviteScalarWhereWithAggregatesInput = {
    AND?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    OR?: InviteScalarWhereWithAggregatesInput[]
    NOT?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Invite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Invite"> | $Enums.Status
    communityId?: IntWithAggregatesFilter<"Invite"> | number
    userId?: IntWithAggregatesFilter<"Invite"> | number
  }

  export type UserCreateInput = {
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    communityLeader?: CommunityCreateNestedManyWithoutCreatedByInput
    communityMember?: CommunityCreateNestedManyWithoutMembersInput
    requests?: RequestCreateNestedManyWithoutUserInput
    invites?: InviteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    communityLeader?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    communityMember?: CommunityUncheckedCreateNestedManyWithoutMembersInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    invites?: InviteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    communityLeader?: CommunityUpdateManyWithoutCreatedByNestedInput
    communityMember?: CommunityUpdateManyWithoutMembersNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    invites?: InviteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    communityLeader?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    communityMember?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    invites?: InviteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ThreadCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    author?: UserCreateNestedOneWithoutThreadsInput
    community?: CommunityCreateNestedOneWithoutThreadsInput
    parent?: ThreadCreateNestedOneWithoutChildrenInput
    children?: ThreadCreateNestedManyWithoutParentInput
  }

  export type ThreadUncheckedCreateInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    authorId?: number | null
    communityId?: number | null
    parentId?: number | null
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
  }

  export type ThreadUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneWithoutThreadsNestedInput
    community?: CommunityUpdateOneWithoutThreadsNestedInput
    parent?: ThreadUpdateOneWithoutChildrenNestedInput
    children?: ThreadUpdateManyWithoutParentNestedInput
  }

  export type ThreadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ThreadCreateManyInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    authorId?: number | null
    communityId?: number | null
    parentId?: number | null
  }

  export type ThreadUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ThreadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommunityCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    createdBy?: UserCreateNestedOneWithoutCommunityLeaderInput
    members?: UserCreateNestedManyWithoutCommunityMemberInput
    threads?: ThreadCreateNestedManyWithoutCommunityInput
    requests?: RequestCreateNestedManyWithoutCommunityInput
    invites?: InviteCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    creatorId?: number | null
    members?: UserUncheckedCreateNestedManyWithoutCommunityMemberInput
    threads?: ThreadUncheckedCreateNestedManyWithoutCommunityInput
    requests?: RequestUncheckedCreateNestedManyWithoutCommunityInput
    invites?: InviteUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneWithoutCommunityLeaderNestedInput
    members?: UserUpdateManyWithoutCommunityMemberNestedInput
    threads?: ThreadUpdateManyWithoutCommunityNestedInput
    requests?: RequestUpdateManyWithoutCommunityNestedInput
    invites?: InviteUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    members?: UserUncheckedUpdateManyWithoutCommunityMemberNestedInput
    threads?: ThreadUncheckedUpdateManyWithoutCommunityNestedInput
    requests?: RequestUncheckedUpdateManyWithoutCommunityNestedInput
    invites?: InviteUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    creatorId?: number | null
  }

  export type CommunityUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RequestCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    community: CommunityCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    communityId: number
    userId: number
  }

  export type RequestUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    community?: CommunityUpdateOneRequiredWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestCreateManyInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    communityId: number
    userId: number
  }

  export type RequestUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type RequestUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type InviteCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    community: CommunityCreateNestedOneWithoutInvitesInput
    user: UserCreateNestedOneWithoutInvitesInput
  }

  export type InviteUncheckedCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    communityId: number
    userId: number
  }

  export type InviteUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    community?: CommunityUpdateOneRequiredWithoutInvitesNestedInput
    user?: UserUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type InviteUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type InviteCreateManyInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    communityId: number
    userId: number
  }

  export type InviteUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type InviteUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ThreadListRelationFilter = {
    every?: ThreadWhereInput
    some?: ThreadWhereInput
    none?: ThreadWhereInput
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type InviteListRelationFilter = {
    every?: InviteWhereInput
    some?: InviteWhereInput
    none?: InviteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    onboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activeCommunity?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    activeCommunity?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    onboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activeCommunity?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    onboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activeCommunity?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    activeCommunity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CommunityNullableRelationFilter = {
    is?: CommunityWhereInput | null
    isNot?: CommunityWhereInput | null
  }

  export type ThreadNullableRelationFilter = {
    is?: ThreadWhereInput | null
    isNot?: ThreadWhereInput | null
  }

  export type ThreadCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
    parentId?: SortOrder
  }

  export type ThreadAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
    parentId?: SortOrder
  }

  export type ThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
    parentId?: SortOrder
  }

  export type ThreadMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
    parentId?: SortOrder
  }

  export type ThreadSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    communityId?: SortOrder
    parentId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    username?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    creatorId?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    username?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    creatorId?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    username?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    creatorId?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type CommunityRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RequestCommunityIdUserIdCompoundUniqueInput = {
    communityId: number
    userId: number
  }

  export type RequestCountOrderByAggregateInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedat?: SortOrder
    status?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type RequestAvgOrderByAggregateInput = {
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedat?: SortOrder
    status?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedat?: SortOrder
    status?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type RequestSumOrderByAggregateInput = {
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type InviteCommunityIdUserIdCompoundUniqueInput = {
    communityId: number
    userId: number
  }

  export type InviteCountOrderByAggregateInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedat?: SortOrder
    status?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type InviteAvgOrderByAggregateInput = {
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type InviteMaxOrderByAggregateInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedat?: SortOrder
    status?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type InviteMinOrderByAggregateInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedat?: SortOrder
    status?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type InviteSumOrderByAggregateInput = {
    communityId?: SortOrder
    userId?: SortOrder
  }

  export type ThreadCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutMembersInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput> | CommunityCreateWithoutMembersInput[] | CommunityUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput | CommunityCreateOrConnectWithoutMembersInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type InviteCreateNestedManyWithoutUserInput = {
    create?: XOR<InviteCreateWithoutUserInput, InviteUncheckedCreateWithoutUserInput> | InviteCreateWithoutUserInput[] | InviteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutUserInput | InviteCreateOrConnectWithoutUserInput[]
    createMany?: InviteCreateManyUserInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput> | CommunityCreateWithoutMembersInput[] | CommunityUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput | CommunityCreateOrConnectWithoutMembersInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type InviteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InviteCreateWithoutUserInput, InviteUncheckedCreateWithoutUserInput> | InviteCreateWithoutUserInput[] | InviteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutUserInput | InviteCreateOrConnectWithoutUserInput[]
    createMany?: InviteCreateManyUserInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ThreadUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutAuthorInput | ThreadUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutAuthorInput | ThreadUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutAuthorInput | ThreadUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutCreatedByInput | CommunityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutCreatedByInput | CommunityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutCreatedByInput | CommunityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutMembersNestedInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput> | CommunityCreateWithoutMembersInput[] | CommunityUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput | CommunityCreateOrConnectWithoutMembersInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutMembersInput | CommunityUpsertWithWhereUniqueWithoutMembersInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutMembersInput | CommunityUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutMembersInput | CommunityUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type InviteUpdateManyWithoutUserNestedInput = {
    create?: XOR<InviteCreateWithoutUserInput, InviteUncheckedCreateWithoutUserInput> | InviteCreateWithoutUserInput[] | InviteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutUserInput | InviteCreateOrConnectWithoutUserInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutUserInput | InviteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InviteCreateManyUserInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutUserInput | InviteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutUserInput | InviteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ThreadUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutAuthorInput | ThreadUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutAuthorInput | ThreadUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutAuthorInput | ThreadUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutCreatedByInput | CommunityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutCreatedByInput | CommunityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutCreatedByInput | CommunityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput> | CommunityCreateWithoutMembersInput[] | CommunityUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput | CommunityCreateOrConnectWithoutMembersInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutMembersInput | CommunityUpsertWithWhereUniqueWithoutMembersInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutMembersInput | CommunityUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutMembersInput | CommunityUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type InviteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InviteCreateWithoutUserInput, InviteUncheckedCreateWithoutUserInput> | InviteCreateWithoutUserInput[] | InviteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutUserInput | InviteCreateOrConnectWithoutUserInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutUserInput | InviteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InviteCreateManyUserInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutUserInput | InviteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutUserInput | InviteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutThreadsInput = {
    create?: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutThreadsInput = {
    create?: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutThreadsInput
    connect?: CommunityWhereUniqueInput
  }

  export type ThreadCreateNestedOneWithoutChildrenInput = {
    create?: XOR<ThreadCreateWithoutChildrenInput, ThreadUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutChildrenInput
    connect?: ThreadWhereUniqueInput
  }

  export type ThreadCreateNestedManyWithoutParentInput = {
    create?: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput> | ThreadCreateWithoutParentInput[] | ThreadUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutParentInput | ThreadCreateOrConnectWithoutParentInput[]
    createMany?: ThreadCreateManyParentInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput> | ThreadCreateWithoutParentInput[] | ThreadUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutParentInput | ThreadCreateOrConnectWithoutParentInput[]
    createMany?: ThreadCreateManyParentInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutThreadsNestedInput = {
    create?: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsInput
    upsert?: UserUpsertWithoutThreadsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThreadsInput, UserUpdateWithoutThreadsInput>, UserUncheckedUpdateWithoutThreadsInput>
  }

  export type CommunityUpdateOneWithoutThreadsNestedInput = {
    create?: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutThreadsInput
    upsert?: CommunityUpsertWithoutThreadsInput
    disconnect?: CommunityWhereInput | boolean
    delete?: CommunityWhereInput | boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutThreadsInput, CommunityUpdateWithoutThreadsInput>, CommunityUncheckedUpdateWithoutThreadsInput>
  }

  export type ThreadUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<ThreadCreateWithoutChildrenInput, ThreadUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutChildrenInput
    upsert?: ThreadUpsertWithoutChildrenInput
    disconnect?: ThreadWhereInput | boolean
    delete?: ThreadWhereInput | boolean
    connect?: ThreadWhereUniqueInput
    update?: XOR<XOR<ThreadUpdateToOneWithWhereWithoutChildrenInput, ThreadUpdateWithoutChildrenInput>, ThreadUncheckedUpdateWithoutChildrenInput>
  }

  export type ThreadUpdateManyWithoutParentNestedInput = {
    create?: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput> | ThreadCreateWithoutParentInput[] | ThreadUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutParentInput | ThreadCreateOrConnectWithoutParentInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutParentInput | ThreadUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ThreadCreateManyParentInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutParentInput | ThreadUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutParentInput | ThreadUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type ThreadUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput> | ThreadCreateWithoutParentInput[] | ThreadUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutParentInput | ThreadCreateOrConnectWithoutParentInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutParentInput | ThreadUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ThreadCreateManyParentInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutParentInput | ThreadUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutParentInput | ThreadUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommunityLeaderInput = {
    create?: XOR<UserCreateWithoutCommunityLeaderInput, UserUncheckedCreateWithoutCommunityLeaderInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityLeaderInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCommunityMemberInput = {
    create?: XOR<UserCreateWithoutCommunityMemberInput, UserUncheckedCreateWithoutCommunityMemberInput> | UserCreateWithoutCommunityMemberInput[] | UserUncheckedCreateWithoutCommunityMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunityMemberInput | UserCreateOrConnectWithoutCommunityMemberInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ThreadCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput> | ThreadCreateWithoutCommunityInput[] | ThreadUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutCommunityInput | ThreadCreateOrConnectWithoutCommunityInput[]
    createMany?: ThreadCreateManyCommunityInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutCommunityInput = {
    create?: XOR<RequestCreateWithoutCommunityInput, RequestUncheckedCreateWithoutCommunityInput> | RequestCreateWithoutCommunityInput[] | RequestUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutCommunityInput | RequestCreateOrConnectWithoutCommunityInput[]
    createMany?: RequestCreateManyCommunityInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type InviteCreateNestedManyWithoutCommunityInput = {
    create?: XOR<InviteCreateWithoutCommunityInput, InviteUncheckedCreateWithoutCommunityInput> | InviteCreateWithoutCommunityInput[] | InviteUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutCommunityInput | InviteCreateOrConnectWithoutCommunityInput[]
    createMany?: InviteCreateManyCommunityInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCommunityMemberInput = {
    create?: XOR<UserCreateWithoutCommunityMemberInput, UserUncheckedCreateWithoutCommunityMemberInput> | UserCreateWithoutCommunityMemberInput[] | UserUncheckedCreateWithoutCommunityMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunityMemberInput | UserCreateOrConnectWithoutCommunityMemberInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput> | ThreadCreateWithoutCommunityInput[] | ThreadUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutCommunityInput | ThreadCreateOrConnectWithoutCommunityInput[]
    createMany?: ThreadCreateManyCommunityInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<RequestCreateWithoutCommunityInput, RequestUncheckedCreateWithoutCommunityInput> | RequestCreateWithoutCommunityInput[] | RequestUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutCommunityInput | RequestCreateOrConnectWithoutCommunityInput[]
    createMany?: RequestCreateManyCommunityInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type InviteUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<InviteCreateWithoutCommunityInput, InviteUncheckedCreateWithoutCommunityInput> | InviteCreateWithoutCommunityInput[] | InviteUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutCommunityInput | InviteCreateOrConnectWithoutCommunityInput[]
    createMany?: InviteCreateManyCommunityInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCommunityLeaderNestedInput = {
    create?: XOR<UserCreateWithoutCommunityLeaderInput, UserUncheckedCreateWithoutCommunityLeaderInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityLeaderInput
    upsert?: UserUpsertWithoutCommunityLeaderInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunityLeaderInput, UserUpdateWithoutCommunityLeaderInput>, UserUncheckedUpdateWithoutCommunityLeaderInput>
  }

  export type UserUpdateManyWithoutCommunityMemberNestedInput = {
    create?: XOR<UserCreateWithoutCommunityMemberInput, UserUncheckedCreateWithoutCommunityMemberInput> | UserCreateWithoutCommunityMemberInput[] | UserUncheckedCreateWithoutCommunityMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunityMemberInput | UserCreateOrConnectWithoutCommunityMemberInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCommunityMemberInput | UserUpsertWithWhereUniqueWithoutCommunityMemberInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCommunityMemberInput | UserUpdateWithWhereUniqueWithoutCommunityMemberInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCommunityMemberInput | UserUpdateManyWithWhereWithoutCommunityMemberInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ThreadUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput> | ThreadCreateWithoutCommunityInput[] | ThreadUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutCommunityInput | ThreadCreateOrConnectWithoutCommunityInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutCommunityInput | ThreadUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ThreadCreateManyCommunityInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutCommunityInput | ThreadUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutCommunityInput | ThreadUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<RequestCreateWithoutCommunityInput, RequestUncheckedCreateWithoutCommunityInput> | RequestCreateWithoutCommunityInput[] | RequestUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutCommunityInput | RequestCreateOrConnectWithoutCommunityInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutCommunityInput | RequestUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: RequestCreateManyCommunityInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutCommunityInput | RequestUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutCommunityInput | RequestUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type InviteUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<InviteCreateWithoutCommunityInput, InviteUncheckedCreateWithoutCommunityInput> | InviteCreateWithoutCommunityInput[] | InviteUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutCommunityInput | InviteCreateOrConnectWithoutCommunityInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutCommunityInput | InviteUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: InviteCreateManyCommunityInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutCommunityInput | InviteUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutCommunityInput | InviteUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCommunityMemberNestedInput = {
    create?: XOR<UserCreateWithoutCommunityMemberInput, UserUncheckedCreateWithoutCommunityMemberInput> | UserCreateWithoutCommunityMemberInput[] | UserUncheckedCreateWithoutCommunityMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunityMemberInput | UserCreateOrConnectWithoutCommunityMemberInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCommunityMemberInput | UserUpsertWithWhereUniqueWithoutCommunityMemberInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCommunityMemberInput | UserUpdateWithWhereUniqueWithoutCommunityMemberInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCommunityMemberInput | UserUpdateManyWithWhereWithoutCommunityMemberInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ThreadUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput> | ThreadCreateWithoutCommunityInput[] | ThreadUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutCommunityInput | ThreadCreateOrConnectWithoutCommunityInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutCommunityInput | ThreadUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ThreadCreateManyCommunityInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutCommunityInput | ThreadUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutCommunityInput | ThreadUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<RequestCreateWithoutCommunityInput, RequestUncheckedCreateWithoutCommunityInput> | RequestCreateWithoutCommunityInput[] | RequestUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutCommunityInput | RequestCreateOrConnectWithoutCommunityInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutCommunityInput | RequestUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: RequestCreateManyCommunityInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutCommunityInput | RequestUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutCommunityInput | RequestUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type InviteUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<InviteCreateWithoutCommunityInput, InviteUncheckedCreateWithoutCommunityInput> | InviteCreateWithoutCommunityInput[] | InviteUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutCommunityInput | InviteCreateOrConnectWithoutCommunityInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutCommunityInput | InviteUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: InviteCreateManyCommunityInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutCommunityInput | InviteUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutCommunityInput | InviteUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutRequestsInput = {
    create?: XOR<CommunityCreateWithoutRequestsInput, CommunityUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutRequestsInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type CommunityUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<CommunityCreateWithoutRequestsInput, CommunityUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutRequestsInput
    upsert?: CommunityUpsertWithoutRequestsInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutRequestsInput, CommunityUpdateWithoutRequestsInput>, CommunityUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type CommunityCreateNestedOneWithoutInvitesInput = {
    create?: XOR<CommunityCreateWithoutInvitesInput, CommunityUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutInvitesInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitesInput = {
    create?: XOR<UserCreateWithoutInvitesInput, UserUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitesInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<CommunityCreateWithoutInvitesInput, CommunityUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutInvitesInput
    upsert?: CommunityUpsertWithoutInvitesInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutInvitesInput, CommunityUpdateWithoutInvitesInput>, CommunityUncheckedUpdateWithoutInvitesInput>
  }

  export type UserUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<UserCreateWithoutInvitesInput, UserUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitesInput
    upsert?: UserUpsertWithoutInvitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitesInput, UserUpdateWithoutInvitesInput>, UserUncheckedUpdateWithoutInvitesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type ThreadCreateWithoutAuthorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    community?: CommunityCreateNestedOneWithoutThreadsInput
    parent?: ThreadCreateNestedOneWithoutChildrenInput
    children?: ThreadCreateNestedManyWithoutParentInput
  }

  export type ThreadUncheckedCreateWithoutAuthorInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    communityId?: number | null
    parentId?: number | null
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
  }

  export type ThreadCreateOrConnectWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadCreateManyAuthorInputEnvelope = {
    data: ThreadCreateManyAuthorInput | ThreadCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommunityCreateWithoutCreatedByInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    members?: UserCreateNestedManyWithoutCommunityMemberInput
    threads?: ThreadCreateNestedManyWithoutCommunityInput
    requests?: RequestCreateNestedManyWithoutCommunityInput
    invites?: InviteCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutCreatedByInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    members?: UserUncheckedCreateNestedManyWithoutCommunityMemberInput
    threads?: ThreadUncheckedCreateNestedManyWithoutCommunityInput
    requests?: RequestUncheckedCreateNestedManyWithoutCommunityInput
    invites?: InviteUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput>
  }

  export type CommunityCreateManyCreatedByInputEnvelope = {
    data: CommunityCreateManyCreatedByInput | CommunityCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CommunityCreateWithoutMembersInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    createdBy?: UserCreateNestedOneWithoutCommunityLeaderInput
    threads?: ThreadCreateNestedManyWithoutCommunityInput
    requests?: RequestCreateNestedManyWithoutCommunityInput
    invites?: InviteCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutMembersInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    creatorId?: number | null
    threads?: ThreadUncheckedCreateNestedManyWithoutCommunityInput
    requests?: RequestUncheckedCreateNestedManyWithoutCommunityInput
    invites?: InviteUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutMembersInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
  }

  export type RequestCreateWithoutUserInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    community: CommunityCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateWithoutUserInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    communityId: number
  }

  export type RequestCreateOrConnectWithoutUserInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestCreateManyUserInputEnvelope = {
    data: RequestCreateManyUserInput | RequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutUserInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    community: CommunityCreateNestedOneWithoutInvitesInput
  }

  export type InviteUncheckedCreateWithoutUserInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    communityId: number
  }

  export type InviteCreateOrConnectWithoutUserInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutUserInput, InviteUncheckedCreateWithoutUserInput>
  }

  export type InviteCreateManyUserInputEnvelope = {
    data: InviteCreateManyUserInput | InviteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ThreadUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutAuthorInput, ThreadUncheckedUpdateWithoutAuthorInput>
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutAuthorInput, ThreadUncheckedUpdateWithoutAuthorInput>
  }

  export type ThreadUpdateManyWithWhereWithoutAuthorInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ThreadScalarWhereInput = {
    AND?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    OR?: ThreadScalarWhereInput[]
    NOT?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    id?: IntFilter<"Thread"> | number
    uuid?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    content?: StringFilter<"Thread"> | string
    authorId?: IntNullableFilter<"Thread"> | number | null
    communityId?: IntNullableFilter<"Thread"> | number | null
    parentId?: IntNullableFilter<"Thread"> | number | null
  }

  export type CommunityUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutCreatedByInput, CommunityUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutCreatedByInput, CommunityUncheckedUpdateWithoutCreatedByInput>
  }

  export type CommunityUpdateManyWithWhereWithoutCreatedByInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id?: IntFilter<"Community"> | number
    uuid?: StringFilter<"Community"> | string
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    name?: StringNullableFilter<"Community"> | string | null
    username?: StringNullableFilter<"Community"> | string | null
    image?: StringNullableFilter<"Community"> | string | null
    bio?: StringNullableFilter<"Community"> | string | null
    creatorId?: IntNullableFilter<"Community"> | number | null
  }

  export type CommunityUpsertWithWhereUniqueWithoutMembersInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutMembersInput, CommunityUncheckedUpdateWithoutMembersInput>
    create: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutMembersInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutMembersInput, CommunityUncheckedUpdateWithoutMembersInput>
  }

  export type CommunityUpdateManyWithWhereWithoutMembersInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutMembersInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
  }

  export type RequestUpdateManyWithWhereWithoutUserInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutUserInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    uuid?: StringFilter<"Request"> | string
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedat?: DateTimeFilter<"Request"> | Date | string
    status?: EnumStatusFilter<"Request"> | $Enums.Status
    communityId?: IntFilter<"Request"> | number
    userId?: IntFilter<"Request"> | number
  }

  export type InviteUpsertWithWhereUniqueWithoutUserInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutUserInput, InviteUncheckedUpdateWithoutUserInput>
    create: XOR<InviteCreateWithoutUserInput, InviteUncheckedCreateWithoutUserInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutUserInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutUserInput, InviteUncheckedUpdateWithoutUserInput>
  }

  export type InviteUpdateManyWithWhereWithoutUserInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutUserInput>
  }

  export type InviteScalarWhereInput = {
    AND?: InviteScalarWhereInput | InviteScalarWhereInput[]
    OR?: InviteScalarWhereInput[]
    NOT?: InviteScalarWhereInput | InviteScalarWhereInput[]
    uuid?: StringFilter<"Invite"> | string
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    updatedat?: DateTimeFilter<"Invite"> | Date | string
    status?: EnumStatusFilter<"Invite"> | $Enums.Status
    communityId?: IntFilter<"Invite"> | number
    userId?: IntFilter<"Invite"> | number
  }

  export type UserCreateWithoutThreadsInput = {
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    communityLeader?: CommunityCreateNestedManyWithoutCreatedByInput
    communityMember?: CommunityCreateNestedManyWithoutMembersInput
    requests?: RequestCreateNestedManyWithoutUserInput
    invites?: InviteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThreadsInput = {
    id?: number
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    communityLeader?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    communityMember?: CommunityUncheckedCreateNestedManyWithoutMembersInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    invites?: InviteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThreadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
  }

  export type CommunityCreateWithoutThreadsInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    createdBy?: UserCreateNestedOneWithoutCommunityLeaderInput
    members?: UserCreateNestedManyWithoutCommunityMemberInput
    requests?: RequestCreateNestedManyWithoutCommunityInput
    invites?: InviteCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutThreadsInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    creatorId?: number | null
    members?: UserUncheckedCreateNestedManyWithoutCommunityMemberInput
    requests?: RequestUncheckedCreateNestedManyWithoutCommunityInput
    invites?: InviteUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutThreadsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
  }

  export type ThreadCreateWithoutChildrenInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    author?: UserCreateNestedOneWithoutThreadsInput
    community?: CommunityCreateNestedOneWithoutThreadsInput
    parent?: ThreadCreateNestedOneWithoutChildrenInput
  }

  export type ThreadUncheckedCreateWithoutChildrenInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    authorId?: number | null
    communityId?: number | null
    parentId?: number | null
  }

  export type ThreadCreateOrConnectWithoutChildrenInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutChildrenInput, ThreadUncheckedCreateWithoutChildrenInput>
  }

  export type ThreadCreateWithoutParentInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    author?: UserCreateNestedOneWithoutThreadsInput
    community?: CommunityCreateNestedOneWithoutThreadsInput
    children?: ThreadCreateNestedManyWithoutParentInput
  }

  export type ThreadUncheckedCreateWithoutParentInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    authorId?: number | null
    communityId?: number | null
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
  }

  export type ThreadCreateOrConnectWithoutParentInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput>
  }

  export type ThreadCreateManyParentInputEnvelope = {
    data: ThreadCreateManyParentInput | ThreadCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutThreadsInput = {
    update: XOR<UserUpdateWithoutThreadsInput, UserUncheckedUpdateWithoutThreadsInput>
    create: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThreadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThreadsInput, UserUncheckedUpdateWithoutThreadsInput>
  }

  export type UserUpdateWithoutThreadsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    communityLeader?: CommunityUpdateManyWithoutCreatedByNestedInput
    communityMember?: CommunityUpdateManyWithoutMembersNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    invites?: InviteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    communityLeader?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    communityMember?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    invites?: InviteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityUpsertWithoutThreadsInput = {
    update: XOR<CommunityUpdateWithoutThreadsInput, CommunityUncheckedUpdateWithoutThreadsInput>
    create: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutThreadsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutThreadsInput, CommunityUncheckedUpdateWithoutThreadsInput>
  }

  export type CommunityUpdateWithoutThreadsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneWithoutCommunityLeaderNestedInput
    members?: UserUpdateManyWithoutCommunityMemberNestedInput
    requests?: RequestUpdateManyWithoutCommunityNestedInput
    invites?: InviteUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutThreadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    members?: UserUncheckedUpdateManyWithoutCommunityMemberNestedInput
    requests?: RequestUncheckedUpdateManyWithoutCommunityNestedInput
    invites?: InviteUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type ThreadUpsertWithoutChildrenInput = {
    update: XOR<ThreadUpdateWithoutChildrenInput, ThreadUncheckedUpdateWithoutChildrenInput>
    create: XOR<ThreadCreateWithoutChildrenInput, ThreadUncheckedCreateWithoutChildrenInput>
    where?: ThreadWhereInput
  }

  export type ThreadUpdateToOneWithWhereWithoutChildrenInput = {
    where?: ThreadWhereInput
    data: XOR<ThreadUpdateWithoutChildrenInput, ThreadUncheckedUpdateWithoutChildrenInput>
  }

  export type ThreadUpdateWithoutChildrenInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneWithoutThreadsNestedInput
    community?: CommunityUpdateOneWithoutThreadsNestedInput
    parent?: ThreadUpdateOneWithoutChildrenNestedInput
  }

  export type ThreadUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ThreadUpsertWithWhereUniqueWithoutParentInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutParentInput, ThreadUncheckedUpdateWithoutParentInput>
    create: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutParentInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutParentInput, ThreadUncheckedUpdateWithoutParentInput>
  }

  export type ThreadUpdateManyWithWhereWithoutParentInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutParentInput>
  }

  export type UserCreateWithoutCommunityLeaderInput = {
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    communityMember?: CommunityCreateNestedManyWithoutMembersInput
    requests?: RequestCreateNestedManyWithoutUserInput
    invites?: InviteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunityLeaderInput = {
    id?: number
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    communityMember?: CommunityUncheckedCreateNestedManyWithoutMembersInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    invites?: InviteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunityLeaderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunityLeaderInput, UserUncheckedCreateWithoutCommunityLeaderInput>
  }

  export type UserCreateWithoutCommunityMemberInput = {
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    communityLeader?: CommunityCreateNestedManyWithoutCreatedByInput
    requests?: RequestCreateNestedManyWithoutUserInput
    invites?: InviteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunityMemberInput = {
    id?: number
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    communityLeader?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    invites?: InviteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunityMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunityMemberInput, UserUncheckedCreateWithoutCommunityMemberInput>
  }

  export type ThreadCreateWithoutCommunityInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    author?: UserCreateNestedOneWithoutThreadsInput
    parent?: ThreadCreateNestedOneWithoutChildrenInput
    children?: ThreadCreateNestedManyWithoutParentInput
  }

  export type ThreadUncheckedCreateWithoutCommunityInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    authorId?: number | null
    parentId?: number | null
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
  }

  export type ThreadCreateOrConnectWithoutCommunityInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput>
  }

  export type ThreadCreateManyCommunityInputEnvelope = {
    data: ThreadCreateManyCommunityInput | ThreadCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutCommunityInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    user: UserCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateWithoutCommunityInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    userId: number
  }

  export type RequestCreateOrConnectWithoutCommunityInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutCommunityInput, RequestUncheckedCreateWithoutCommunityInput>
  }

  export type RequestCreateManyCommunityInputEnvelope = {
    data: RequestCreateManyCommunityInput | RequestCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutCommunityInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    user: UserCreateNestedOneWithoutInvitesInput
  }

  export type InviteUncheckedCreateWithoutCommunityInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    userId: number
  }

  export type InviteCreateOrConnectWithoutCommunityInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutCommunityInput, InviteUncheckedCreateWithoutCommunityInput>
  }

  export type InviteCreateManyCommunityInputEnvelope = {
    data: InviteCreateManyCommunityInput | InviteCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommunityLeaderInput = {
    update: XOR<UserUpdateWithoutCommunityLeaderInput, UserUncheckedUpdateWithoutCommunityLeaderInput>
    create: XOR<UserCreateWithoutCommunityLeaderInput, UserUncheckedCreateWithoutCommunityLeaderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunityLeaderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunityLeaderInput, UserUncheckedUpdateWithoutCommunityLeaderInput>
  }

  export type UserUpdateWithoutCommunityLeaderInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    communityMember?: CommunityUpdateManyWithoutMembersNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    invites?: InviteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunityLeaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    communityMember?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    invites?: InviteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCommunityMemberInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCommunityMemberInput, UserUncheckedUpdateWithoutCommunityMemberInput>
    create: XOR<UserCreateWithoutCommunityMemberInput, UserUncheckedCreateWithoutCommunityMemberInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCommunityMemberInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCommunityMemberInput, UserUncheckedUpdateWithoutCommunityMemberInput>
  }

  export type UserUpdateManyWithWhereWithoutCommunityMemberInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCommunityMemberInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    uuid?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    onboarded?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activeCommunity?: IntNullableFilter<"User"> | number | null
  }

  export type ThreadUpsertWithWhereUniqueWithoutCommunityInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutCommunityInput, ThreadUncheckedUpdateWithoutCommunityInput>
    create: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutCommunityInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutCommunityInput, ThreadUncheckedUpdateWithoutCommunityInput>
  }

  export type ThreadUpdateManyWithWhereWithoutCommunityInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutCommunityInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutCommunityInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutCommunityInput, RequestUncheckedUpdateWithoutCommunityInput>
    create: XOR<RequestCreateWithoutCommunityInput, RequestUncheckedCreateWithoutCommunityInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutCommunityInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutCommunityInput, RequestUncheckedUpdateWithoutCommunityInput>
  }

  export type RequestUpdateManyWithWhereWithoutCommunityInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutCommunityInput>
  }

  export type InviteUpsertWithWhereUniqueWithoutCommunityInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutCommunityInput, InviteUncheckedUpdateWithoutCommunityInput>
    create: XOR<InviteCreateWithoutCommunityInput, InviteUncheckedCreateWithoutCommunityInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutCommunityInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutCommunityInput, InviteUncheckedUpdateWithoutCommunityInput>
  }

  export type InviteUpdateManyWithWhereWithoutCommunityInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutCommunityInput>
  }

  export type CommunityCreateWithoutRequestsInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    createdBy?: UserCreateNestedOneWithoutCommunityLeaderInput
    members?: UserCreateNestedManyWithoutCommunityMemberInput
    threads?: ThreadCreateNestedManyWithoutCommunityInput
    invites?: InviteCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutRequestsInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    creatorId?: number | null
    members?: UserUncheckedCreateNestedManyWithoutCommunityMemberInput
    threads?: ThreadUncheckedCreateNestedManyWithoutCommunityInput
    invites?: InviteUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutRequestsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutRequestsInput, CommunityUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutRequestsInput = {
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    communityLeader?: CommunityCreateNestedManyWithoutCreatedByInput
    communityMember?: CommunityCreateNestedManyWithoutMembersInput
    invites?: InviteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: number
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    communityLeader?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    communityMember?: CommunityUncheckedCreateNestedManyWithoutMembersInput
    invites?: InviteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type CommunityUpsertWithoutRequestsInput = {
    update: XOR<CommunityUpdateWithoutRequestsInput, CommunityUncheckedUpdateWithoutRequestsInput>
    create: XOR<CommunityCreateWithoutRequestsInput, CommunityUncheckedCreateWithoutRequestsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutRequestsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutRequestsInput, CommunityUncheckedUpdateWithoutRequestsInput>
  }

  export type CommunityUpdateWithoutRequestsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneWithoutCommunityLeaderNestedInput
    members?: UserUpdateManyWithoutCommunityMemberNestedInput
    threads?: ThreadUpdateManyWithoutCommunityNestedInput
    invites?: InviteUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    members?: UserUncheckedUpdateManyWithoutCommunityMemberNestedInput
    threads?: ThreadUncheckedUpdateManyWithoutCommunityNestedInput
    invites?: InviteUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    communityLeader?: CommunityUpdateManyWithoutCreatedByNestedInput
    communityMember?: CommunityUpdateManyWithoutMembersNestedInput
    invites?: InviteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    communityLeader?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    communityMember?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
    invites?: InviteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityCreateWithoutInvitesInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    createdBy?: UserCreateNestedOneWithoutCommunityLeaderInput
    members?: UserCreateNestedManyWithoutCommunityMemberInput
    threads?: ThreadCreateNestedManyWithoutCommunityInput
    requests?: RequestCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutInvitesInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
    creatorId?: number | null
    members?: UserUncheckedCreateNestedManyWithoutCommunityMemberInput
    threads?: ThreadUncheckedCreateNestedManyWithoutCommunityInput
    requests?: RequestUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutInvitesInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutInvitesInput, CommunityUncheckedCreateWithoutInvitesInput>
  }

  export type UserCreateWithoutInvitesInput = {
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    threads?: ThreadCreateNestedManyWithoutAuthorInput
    communityLeader?: CommunityCreateNestedManyWithoutCreatedByInput
    communityMember?: CommunityCreateNestedManyWithoutMembersInput
    requests?: RequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitesInput = {
    id?: number
    uuid?: string
    name?: string | null
    username?: string | null
    email: string
    password: string
    image?: string | null
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activeCommunity?: number | null
    threads?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    communityLeader?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    communityMember?: CommunityUncheckedCreateNestedManyWithoutMembersInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitesInput, UserUncheckedCreateWithoutInvitesInput>
  }

  export type CommunityUpsertWithoutInvitesInput = {
    update: XOR<CommunityUpdateWithoutInvitesInput, CommunityUncheckedUpdateWithoutInvitesInput>
    create: XOR<CommunityCreateWithoutInvitesInput, CommunityUncheckedCreateWithoutInvitesInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutInvitesInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutInvitesInput, CommunityUncheckedUpdateWithoutInvitesInput>
  }

  export type CommunityUpdateWithoutInvitesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneWithoutCommunityLeaderNestedInput
    members?: UserUpdateManyWithoutCommunityMemberNestedInput
    threads?: ThreadUpdateManyWithoutCommunityNestedInput
    requests?: RequestUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutInvitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    members?: UserUncheckedUpdateManyWithoutCommunityMemberNestedInput
    threads?: ThreadUncheckedUpdateManyWithoutCommunityNestedInput
    requests?: RequestUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type UserUpsertWithoutInvitesInput = {
    update: XOR<UserUpdateWithoutInvitesInput, UserUncheckedUpdateWithoutInvitesInput>
    create: XOR<UserCreateWithoutInvitesInput, UserUncheckedCreateWithoutInvitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitesInput, UserUncheckedUpdateWithoutInvitesInput>
  }

  export type UserUpdateWithoutInvitesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    communityLeader?: CommunityUpdateManyWithoutCreatedByNestedInput
    communityMember?: CommunityUpdateManyWithoutMembersNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    communityLeader?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    communityMember?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadCreateManyAuthorInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    communityId?: number | null
    parentId?: number | null
  }

  export type CommunityCreateManyCreatedByInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    username?: string | null
    image?: string | null
    bio?: string | null
  }

  export type RequestCreateManyUserInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    communityId: number
  }

  export type InviteCreateManyUserInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    communityId: number
  }

  export type ThreadUpdateWithoutAuthorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    community?: CommunityUpdateOneWithoutThreadsNestedInput
    parent?: ThreadUpdateOneWithoutChildrenNestedInput
    children?: ThreadUpdateManyWithoutParentNestedInput
  }

  export type ThreadUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommunityUpdateWithoutCreatedByInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UserUpdateManyWithoutCommunityMemberNestedInput
    threads?: ThreadUpdateManyWithoutCommunityNestedInput
    requests?: RequestUpdateManyWithoutCommunityNestedInput
    invites?: InviteUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UserUncheckedUpdateManyWithoutCommunityMemberNestedInput
    threads?: ThreadUncheckedUpdateManyWithoutCommunityNestedInput
    requests?: RequestUncheckedUpdateManyWithoutCommunityNestedInput
    invites?: InviteUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommunityUpdateWithoutMembersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneWithoutCommunityLeaderNestedInput
    threads?: ThreadUpdateManyWithoutCommunityNestedInput
    requests?: RequestUpdateManyWithoutCommunityNestedInput
    invites?: InviteUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUncheckedUpdateManyWithoutCommunityNestedInput
    requests?: RequestUncheckedUpdateManyWithoutCommunityNestedInput
    invites?: InviteUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RequestUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    community?: CommunityUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestUncheckedUpdateManyWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type InviteUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    community?: CommunityUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type InviteUncheckedUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type InviteUncheckedUpdateManyWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type ThreadCreateManyParentInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    authorId?: number | null
    communityId?: number | null
  }

  export type ThreadUpdateWithoutParentInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneWithoutThreadsNestedInput
    community?: CommunityUpdateOneWithoutThreadsNestedInput
    children?: ThreadUpdateManyWithoutParentNestedInput
  }

  export type ThreadUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ThreadCreateManyCommunityInput = {
    id?: number
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    authorId?: number | null
    parentId?: number | null
  }

  export type RequestCreateManyCommunityInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    userId: number
  }

  export type InviteCreateManyCommunityInput = {
    uuid?: string
    createdAt?: Date | string
    updatedat?: Date | string
    status: $Enums.Status
    userId: number
  }

  export type UserUpdateWithoutCommunityMemberInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUpdateManyWithoutAuthorNestedInput
    communityLeader?: CommunityUpdateManyWithoutCreatedByNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    invites?: InviteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunityMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
    threads?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    communityLeader?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    invites?: InviteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCommunityMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activeCommunity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ThreadUpdateWithoutCommunityInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneWithoutThreadsNestedInput
    parent?: ThreadUpdateOneWithoutChildrenNestedInput
    children?: ThreadUpdateManyWithoutParentNestedInput
  }

  export type ThreadUncheckedUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RequestUpdateWithoutCommunityInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutCommunityInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestUncheckedUpdateManyWithoutCommunityInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type InviteUpdateWithoutCommunityInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type InviteUncheckedUpdateWithoutCommunityInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type InviteUncheckedUpdateManyWithoutCommunityInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThreadCountOutputTypeDefaultArgs instead
     */
    export type ThreadCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThreadCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityCountOutputTypeDefaultArgs instead
     */
    export type CommunityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThreadDefaultArgs instead
     */
    export type ThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThreadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityDefaultArgs instead
     */
    export type CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequestDefaultArgs instead
     */
    export type RequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InviteDefaultArgs instead
     */
    export type InviteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InviteDefaultArgs<ExtArgs>

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