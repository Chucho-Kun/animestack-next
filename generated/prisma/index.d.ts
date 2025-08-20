
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Animes
 * 
 */
export type Animes = $Result.DefaultSelection<Prisma.$AnimesPayload>
/**
 * Model Ranking
 * 
 */
export type Ranking = $Result.DefaultSelection<Prisma.$RankingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animes`: Exposes CRUD operations for the **Animes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animes
    * const animes = await prisma.animes.findMany()
    * ```
    */
  get animes(): Prisma.AnimesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ranking`: Exposes CRUD operations for the **Ranking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rankings
    * const rankings = await prisma.ranking.findMany()
    * ```
    */
  get ranking(): Prisma.RankingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Users: 'Users',
    Animes: 'Animes',
    Ranking: 'Ranking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "animes" | "ranking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Animes: {
        payload: Prisma.$AnimesPayload<ExtArgs>
        fields: Prisma.AnimesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          findFirst: {
            args: Prisma.AnimesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          findMany: {
            args: Prisma.AnimesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>[]
          }
          create: {
            args: Prisma.AnimesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          createMany: {
            args: Prisma.AnimesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>[]
          }
          delete: {
            args: Prisma.AnimesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          update: {
            args: Prisma.AnimesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          deleteMany: {
            args: Prisma.AnimesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>[]
          }
          upsert: {
            args: Prisma.AnimesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          aggregate: {
            args: Prisma.AnimesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimes>
          }
          groupBy: {
            args: Prisma.AnimesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimesCountArgs<ExtArgs>
            result: $Utils.Optional<AnimesCountAggregateOutputType> | number
          }
        }
      }
      Ranking: {
        payload: Prisma.$RankingPayload<ExtArgs>
        fields: Prisma.RankingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RankingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RankingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          findFirst: {
            args: Prisma.RankingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RankingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          findMany: {
            args: Prisma.RankingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>[]
          }
          create: {
            args: Prisma.RankingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          createMany: {
            args: Prisma.RankingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RankingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>[]
          }
          delete: {
            args: Prisma.RankingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          update: {
            args: Prisma.RankingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          deleteMany: {
            args: Prisma.RankingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RankingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RankingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>[]
          }
          upsert: {
            args: Prisma.RankingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingPayload>
          }
          aggregate: {
            args: Prisma.RankingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRanking>
          }
          groupBy: {
            args: Prisma.RankingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RankingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RankingCountArgs<ExtArgs>
            result: $Utils.Optional<RankingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    animes?: AnimesOmit
    ranking?: RankingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    following: number
    ranked: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | UsersCountOutputTypeCountFollowingArgs
    ranked?: boolean | UsersCountOutputTypeCountRankedArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRankedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankingWhereInput
  }


  /**
   * Count Type AnimesCountOutputType
   */

  export type AnimesCountOutputType = {
    followers: number
    ranking: number
  }

  export type AnimesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | AnimesCountOutputTypeCountFollowersArgs
    ranking?: boolean | AnimesCountOutputTypeCountRankingArgs
  }

  // Custom InputTypes
  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimesCountOutputType
     */
    select?: AnimesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeCountRankingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    country: string | null
    enable: boolean | null
    about: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    country: string | null
    enable: boolean | null
    about: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    country: number
    enable: number
    about: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    country?: true
    enable?: true
    about?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    country?: true
    enable?: true
    about?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    country?: true
    enable?: true
    about?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    avatar: string
    country: string
    enable: boolean
    about: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    country?: boolean
    enable?: boolean
    about?: boolean
    following?: boolean | Users$followingArgs<ExtArgs>
    ranked?: boolean | Users$rankedArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    country?: boolean
    enable?: boolean
    about?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    country?: boolean
    enable?: boolean
    about?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    country?: boolean
    enable?: boolean
    about?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "avatar" | "country" | "enable" | "about", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | Users$followingArgs<ExtArgs>
    ranked?: boolean | Users$rankedArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      following: Prisma.$AnimesPayload<ExtArgs>[]
      ranked: Prisma.$RankingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      avatar: string
      country: string
      enable: boolean
      about: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    following<T extends Users$followingArgs<ExtArgs> = {}>(args?: Subset<T, Users$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ranked<T extends Users$rankedArgs<ExtArgs> = {}>(args?: Subset<T, Users$rankedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly country: FieldRef<"Users", 'String'>
    readonly enable: FieldRef<"Users", 'Boolean'>
    readonly about: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.following
   */
  export type Users$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    where?: AnimesWhereInput
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    cursor?: AnimesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Users.ranked
   */
  export type Users$rankedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    where?: RankingWhereInput
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    cursor?: RankingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RankingScalarFieldEnum | RankingScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Animes
   */

  export type AggregateAnimes = {
    _count: AnimesCountAggregateOutputType | null
    _avg: AnimesAvgAggregateOutputType | null
    _sum: AnimesSumAggregateOutputType | null
    _min: AnimesMinAggregateOutputType | null
    _max: AnimesMaxAggregateOutputType | null
  }

  export type AnimesAvgAggregateOutputType = {
    id: number | null
  }

  export type AnimesSumAggregateOutputType = {
    id: number | null
  }

  export type AnimesMinAggregateOutputType = {
    id: number | null
    name: string | null
    nameUrl: string | null
    review: string | null
    gender: string | null
    studio: string | null
    date: string | null
    img: string | null
    enable: boolean | null
  }

  export type AnimesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nameUrl: string | null
    review: string | null
    gender: string | null
    studio: string | null
    date: string | null
    img: string | null
    enable: boolean | null
  }

  export type AnimesCountAggregateOutputType = {
    id: number
    name: number
    nameUrl: number
    review: number
    gender: number
    studio: number
    date: number
    img: number
    enable: number
    _all: number
  }


  export type AnimesAvgAggregateInputType = {
    id?: true
  }

  export type AnimesSumAggregateInputType = {
    id?: true
  }

  export type AnimesMinAggregateInputType = {
    id?: true
    name?: true
    nameUrl?: true
    review?: true
    gender?: true
    studio?: true
    date?: true
    img?: true
    enable?: true
  }

  export type AnimesMaxAggregateInputType = {
    id?: true
    name?: true
    nameUrl?: true
    review?: true
    gender?: true
    studio?: true
    date?: true
    img?: true
    enable?: true
  }

  export type AnimesCountAggregateInputType = {
    id?: true
    name?: true
    nameUrl?: true
    review?: true
    gender?: true
    studio?: true
    date?: true
    img?: true
    enable?: true
    _all?: true
  }

  export type AnimesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animes to aggregate.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animes
    **/
    _count?: true | AnimesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimesMaxAggregateInputType
  }

  export type GetAnimesAggregateType<T extends AnimesAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimes[P]>
      : GetScalarType<T[P], AggregateAnimes[P]>
  }




  export type AnimesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimesWhereInput
    orderBy?: AnimesOrderByWithAggregationInput | AnimesOrderByWithAggregationInput[]
    by: AnimesScalarFieldEnum[] | AnimesScalarFieldEnum
    having?: AnimesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimesCountAggregateInputType | true
    _avg?: AnimesAvgAggregateInputType
    _sum?: AnimesSumAggregateInputType
    _min?: AnimesMinAggregateInputType
    _max?: AnimesMaxAggregateInputType
  }

  export type AnimesGroupByOutputType = {
    id: number
    name: string
    nameUrl: string
    review: string
    gender: string
    studio: string
    date: string
    img: string
    enable: boolean
    _count: AnimesCountAggregateOutputType | null
    _avg: AnimesAvgAggregateOutputType | null
    _sum: AnimesSumAggregateOutputType | null
    _min: AnimesMinAggregateOutputType | null
    _max: AnimesMaxAggregateOutputType | null
  }

  type GetAnimesGroupByPayload<T extends AnimesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimesGroupByOutputType[P]>
            : GetScalarType<T[P], AnimesGroupByOutputType[P]>
        }
      >
    >


  export type AnimesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameUrl?: boolean
    review?: boolean
    gender?: boolean
    studio?: boolean
    date?: boolean
    img?: boolean
    enable?: boolean
    followers?: boolean | Animes$followersArgs<ExtArgs>
    ranking?: boolean | Animes$rankingArgs<ExtArgs>
    _count?: boolean | AnimesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animes"]>

  export type AnimesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameUrl?: boolean
    review?: boolean
    gender?: boolean
    studio?: boolean
    date?: boolean
    img?: boolean
    enable?: boolean
  }, ExtArgs["result"]["animes"]>

  export type AnimesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nameUrl?: boolean
    review?: boolean
    gender?: boolean
    studio?: boolean
    date?: boolean
    img?: boolean
    enable?: boolean
  }, ExtArgs["result"]["animes"]>

  export type AnimesSelectScalar = {
    id?: boolean
    name?: boolean
    nameUrl?: boolean
    review?: boolean
    gender?: boolean
    studio?: boolean
    date?: boolean
    img?: boolean
    enable?: boolean
  }

  export type AnimesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nameUrl" | "review" | "gender" | "studio" | "date" | "img" | "enable", ExtArgs["result"]["animes"]>
  export type AnimesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | Animes$followersArgs<ExtArgs>
    ranking?: boolean | Animes$rankingArgs<ExtArgs>
    _count?: boolean | AnimesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnimesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnimesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animes"
    objects: {
      followers: Prisma.$UsersPayload<ExtArgs>[]
      ranking: Prisma.$RankingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nameUrl: string
      review: string
      gender: string
      studio: string
      date: string
      img: string
      enable: boolean
    }, ExtArgs["result"]["animes"]>
    composites: {}
  }

  type AnimesGetPayload<S extends boolean | null | undefined | AnimesDefaultArgs> = $Result.GetResult<Prisma.$AnimesPayload, S>

  type AnimesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimesCountAggregateInputType | true
    }

  export interface AnimesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animes'], meta: { name: 'Animes' } }
    /**
     * Find zero or one Animes that matches the filter.
     * @param {AnimesFindUniqueArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimesFindUniqueArgs>(args: SelectSubset<T, AnimesFindUniqueArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimesFindUniqueOrThrowArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimesFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindFirstArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimesFindFirstArgs>(args?: SelectSubset<T, AnimesFindFirstArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindFirstOrThrowArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimesFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animes
     * const animes = await prisma.animes.findMany()
     * 
     * // Get first 10 Animes
     * const animes = await prisma.animes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animesWithIdOnly = await prisma.animes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimesFindManyArgs>(args?: SelectSubset<T, AnimesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animes.
     * @param {AnimesCreateArgs} args - Arguments to create a Animes.
     * @example
     * // Create one Animes
     * const Animes = await prisma.animes.create({
     *   data: {
     *     // ... data to create a Animes
     *   }
     * })
     * 
     */
    create<T extends AnimesCreateArgs>(args: SelectSubset<T, AnimesCreateArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animes.
     * @param {AnimesCreateManyArgs} args - Arguments to create many Animes.
     * @example
     * // Create many Animes
     * const animes = await prisma.animes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimesCreateManyArgs>(args?: SelectSubset<T, AnimesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Animes and returns the data saved in the database.
     * @param {AnimesCreateManyAndReturnArgs} args - Arguments to create many Animes.
     * @example
     * // Create many Animes
     * const animes = await prisma.animes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Animes and only return the `id`
     * const animesWithIdOnly = await prisma.animes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimesCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Animes.
     * @param {AnimesDeleteArgs} args - Arguments to delete one Animes.
     * @example
     * // Delete one Animes
     * const Animes = await prisma.animes.delete({
     *   where: {
     *     // ... filter to delete one Animes
     *   }
     * })
     * 
     */
    delete<T extends AnimesDeleteArgs>(args: SelectSubset<T, AnimesDeleteArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animes.
     * @param {AnimesUpdateArgs} args - Arguments to update one Animes.
     * @example
     * // Update one Animes
     * const animes = await prisma.animes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimesUpdateArgs>(args: SelectSubset<T, AnimesUpdateArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animes.
     * @param {AnimesDeleteManyArgs} args - Arguments to filter Animes to delete.
     * @example
     * // Delete a few Animes
     * const { count } = await prisma.animes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimesDeleteManyArgs>(args?: SelectSubset<T, AnimesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animes
     * const animes = await prisma.animes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimesUpdateManyArgs>(args: SelectSubset<T, AnimesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animes and returns the data updated in the database.
     * @param {AnimesUpdateManyAndReturnArgs} args - Arguments to update many Animes.
     * @example
     * // Update many Animes
     * const animes = await prisma.animes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Animes and only return the `id`
     * const animesWithIdOnly = await prisma.animes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimesUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Animes.
     * @param {AnimesUpsertArgs} args - Arguments to update or create a Animes.
     * @example
     * // Update or create a Animes
     * const animes = await prisma.animes.upsert({
     *   create: {
     *     // ... data to create a Animes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animes we want to update
     *   }
     * })
     */
    upsert<T extends AnimesUpsertArgs>(args: SelectSubset<T, AnimesUpsertArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesCountArgs} args - Arguments to filter Animes to count.
     * @example
     * // Count the number of Animes
     * const count = await prisma.animes.count({
     *   where: {
     *     // ... the filter for the Animes we want to count
     *   }
     * })
    **/
    count<T extends AnimesCountArgs>(
      args?: Subset<T, AnimesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimesAggregateArgs>(args: Subset<T, AnimesAggregateArgs>): Prisma.PrismaPromise<GetAnimesAggregateType<T>>

    /**
     * Group by Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesGroupByArgs} args - Group by arguments.
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
      T extends AnimesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimesGroupByArgs['orderBy'] }
        : { orderBy?: AnimesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animes model
   */
  readonly fields: AnimesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    followers<T extends Animes$followersArgs<ExtArgs> = {}>(args?: Subset<T, Animes$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ranking<T extends Animes$rankingArgs<ExtArgs> = {}>(args?: Subset<T, Animes$rankingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Animes model
   */
  interface AnimesFieldRefs {
    readonly id: FieldRef<"Animes", 'Int'>
    readonly name: FieldRef<"Animes", 'String'>
    readonly nameUrl: FieldRef<"Animes", 'String'>
    readonly review: FieldRef<"Animes", 'String'>
    readonly gender: FieldRef<"Animes", 'String'>
    readonly studio: FieldRef<"Animes", 'String'>
    readonly date: FieldRef<"Animes", 'String'>
    readonly img: FieldRef<"Animes", 'String'>
    readonly enable: FieldRef<"Animes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Animes findUnique
   */
  export type AnimesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes findUniqueOrThrow
   */
  export type AnimesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes findFirst
   */
  export type AnimesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animes.
     */
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Animes findFirstOrThrow
   */
  export type AnimesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animes.
     */
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Animes findMany
   */
  export type AnimesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationInput | AnimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }

  /**
   * Animes create
   */
  export type AnimesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * The data needed to create a Animes.
     */
    data: XOR<AnimesCreateInput, AnimesUncheckedCreateInput>
  }

  /**
   * Animes createMany
   */
  export type AnimesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animes.
     */
    data: AnimesCreateManyInput | AnimesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animes createManyAndReturn
   */
  export type AnimesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * The data used to create many Animes.
     */
    data: AnimesCreateManyInput | AnimesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animes update
   */
  export type AnimesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * The data needed to update a Animes.
     */
    data: XOR<AnimesUpdateInput, AnimesUncheckedUpdateInput>
    /**
     * Choose, which Animes to update.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes updateMany
   */
  export type AnimesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animes.
     */
    data: XOR<AnimesUpdateManyMutationInput, AnimesUncheckedUpdateManyInput>
    /**
     * Filter which Animes to update
     */
    where?: AnimesWhereInput
    /**
     * Limit how many Animes to update.
     */
    limit?: number
  }

  /**
   * Animes updateManyAndReturn
   */
  export type AnimesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * The data used to update Animes.
     */
    data: XOR<AnimesUpdateManyMutationInput, AnimesUncheckedUpdateManyInput>
    /**
     * Filter which Animes to update
     */
    where?: AnimesWhereInput
    /**
     * Limit how many Animes to update.
     */
    limit?: number
  }

  /**
   * Animes upsert
   */
  export type AnimesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * The filter to search for the Animes to update in case it exists.
     */
    where: AnimesWhereUniqueInput
    /**
     * In case the Animes found by the `where` argument doesn't exist, create a new Animes with this data.
     */
    create: XOR<AnimesCreateInput, AnimesUncheckedCreateInput>
    /**
     * In case the Animes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimesUpdateInput, AnimesUncheckedUpdateInput>
  }

  /**
   * Animes delete
   */
  export type AnimesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter which Animes to delete.
     */
    where: AnimesWhereUniqueInput
  }

  /**
   * Animes deleteMany
   */
  export type AnimesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animes to delete
     */
    where?: AnimesWhereInput
    /**
     * Limit how many Animes to delete.
     */
    limit?: number
  }

  /**
   * Animes.followers
   */
  export type Animes$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Animes.ranking
   */
  export type Animes$rankingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    where?: RankingWhereInput
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    cursor?: RankingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RankingScalarFieldEnum | RankingScalarFieldEnum[]
  }

  /**
   * Animes without action
   */
  export type AnimesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animes
     */
    omit?: AnimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimesInclude<ExtArgs> | null
  }


  /**
   * Model Ranking
   */

  export type AggregateRanking = {
    _count: RankingCountAggregateOutputType | null
    _avg: RankingAvgAggregateOutputType | null
    _sum: RankingSumAggregateOutputType | null
    _min: RankingMinAggregateOutputType | null
    _max: RankingMaxAggregateOutputType | null
  }

  export type RankingAvgAggregateOutputType = {
    userId: number | null
    animeId: number | null
    score: number | null
  }

  export type RankingSumAggregateOutputType = {
    userId: number | null
    animeId: number | null
    score: number | null
  }

  export type RankingMinAggregateOutputType = {
    userId: number | null
    animeId: number | null
    score: number | null
    followedAt: Date | null
  }

  export type RankingMaxAggregateOutputType = {
    userId: number | null
    animeId: number | null
    score: number | null
    followedAt: Date | null
  }

  export type RankingCountAggregateOutputType = {
    userId: number
    animeId: number
    score: number
    followedAt: number
    _all: number
  }


  export type RankingAvgAggregateInputType = {
    userId?: true
    animeId?: true
    score?: true
  }

  export type RankingSumAggregateInputType = {
    userId?: true
    animeId?: true
    score?: true
  }

  export type RankingMinAggregateInputType = {
    userId?: true
    animeId?: true
    score?: true
    followedAt?: true
  }

  export type RankingMaxAggregateInputType = {
    userId?: true
    animeId?: true
    score?: true
    followedAt?: true
  }

  export type RankingCountAggregateInputType = {
    userId?: true
    animeId?: true
    score?: true
    followedAt?: true
    _all?: true
  }

  export type RankingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ranking to aggregate.
     */
    where?: RankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rankings to fetch.
     */
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rankings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rankings
    **/
    _count?: true | RankingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RankingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RankingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RankingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RankingMaxAggregateInputType
  }

  export type GetRankingAggregateType<T extends RankingAggregateArgs> = {
        [P in keyof T & keyof AggregateRanking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRanking[P]>
      : GetScalarType<T[P], AggregateRanking[P]>
  }




  export type RankingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankingWhereInput
    orderBy?: RankingOrderByWithAggregationInput | RankingOrderByWithAggregationInput[]
    by: RankingScalarFieldEnum[] | RankingScalarFieldEnum
    having?: RankingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RankingCountAggregateInputType | true
    _avg?: RankingAvgAggregateInputType
    _sum?: RankingSumAggregateInputType
    _min?: RankingMinAggregateInputType
    _max?: RankingMaxAggregateInputType
  }

  export type RankingGroupByOutputType = {
    userId: number
    animeId: number
    score: number
    followedAt: Date
    _count: RankingCountAggregateOutputType | null
    _avg: RankingAvgAggregateOutputType | null
    _sum: RankingSumAggregateOutputType | null
    _min: RankingMinAggregateOutputType | null
    _max: RankingMaxAggregateOutputType | null
  }

  type GetRankingGroupByPayload<T extends RankingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RankingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RankingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RankingGroupByOutputType[P]>
            : GetScalarType<T[P], RankingGroupByOutputType[P]>
        }
      >
    >


  export type RankingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    animeId?: boolean
    score?: boolean
    followedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    anime?: boolean | AnimesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ranking"]>

  export type RankingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    animeId?: boolean
    score?: boolean
    followedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    anime?: boolean | AnimesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ranking"]>

  export type RankingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    animeId?: boolean
    score?: boolean
    followedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    anime?: boolean | AnimesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ranking"]>

  export type RankingSelectScalar = {
    userId?: boolean
    animeId?: boolean
    score?: boolean
    followedAt?: boolean
  }

  export type RankingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "animeId" | "score" | "followedAt", ExtArgs["result"]["ranking"]>
  export type RankingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    anime?: boolean | AnimesDefaultArgs<ExtArgs>
  }
  export type RankingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    anime?: boolean | AnimesDefaultArgs<ExtArgs>
  }
  export type RankingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    anime?: boolean | AnimesDefaultArgs<ExtArgs>
  }

  export type $RankingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ranking"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      anime: Prisma.$AnimesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      animeId: number
      score: number
      followedAt: Date
    }, ExtArgs["result"]["ranking"]>
    composites: {}
  }

  type RankingGetPayload<S extends boolean | null | undefined | RankingDefaultArgs> = $Result.GetResult<Prisma.$RankingPayload, S>

  type RankingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RankingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RankingCountAggregateInputType | true
    }

  export interface RankingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ranking'], meta: { name: 'Ranking' } }
    /**
     * Find zero or one Ranking that matches the filter.
     * @param {RankingFindUniqueArgs} args - Arguments to find a Ranking
     * @example
     * // Get one Ranking
     * const ranking = await prisma.ranking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RankingFindUniqueArgs>(args: SelectSubset<T, RankingFindUniqueArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ranking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RankingFindUniqueOrThrowArgs} args - Arguments to find a Ranking
     * @example
     * // Get one Ranking
     * const ranking = await prisma.ranking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RankingFindUniqueOrThrowArgs>(args: SelectSubset<T, RankingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ranking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingFindFirstArgs} args - Arguments to find a Ranking
     * @example
     * // Get one Ranking
     * const ranking = await prisma.ranking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RankingFindFirstArgs>(args?: SelectSubset<T, RankingFindFirstArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ranking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingFindFirstOrThrowArgs} args - Arguments to find a Ranking
     * @example
     * // Get one Ranking
     * const ranking = await prisma.ranking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RankingFindFirstOrThrowArgs>(args?: SelectSubset<T, RankingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rankings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rankings
     * const rankings = await prisma.ranking.findMany()
     * 
     * // Get first 10 Rankings
     * const rankings = await prisma.ranking.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const rankingWithUserIdOnly = await prisma.ranking.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends RankingFindManyArgs>(args?: SelectSubset<T, RankingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ranking.
     * @param {RankingCreateArgs} args - Arguments to create a Ranking.
     * @example
     * // Create one Ranking
     * const Ranking = await prisma.ranking.create({
     *   data: {
     *     // ... data to create a Ranking
     *   }
     * })
     * 
     */
    create<T extends RankingCreateArgs>(args: SelectSubset<T, RankingCreateArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rankings.
     * @param {RankingCreateManyArgs} args - Arguments to create many Rankings.
     * @example
     * // Create many Rankings
     * const ranking = await prisma.ranking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RankingCreateManyArgs>(args?: SelectSubset<T, RankingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rankings and returns the data saved in the database.
     * @param {RankingCreateManyAndReturnArgs} args - Arguments to create many Rankings.
     * @example
     * // Create many Rankings
     * const ranking = await prisma.ranking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rankings and only return the `userId`
     * const rankingWithUserIdOnly = await prisma.ranking.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RankingCreateManyAndReturnArgs>(args?: SelectSubset<T, RankingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ranking.
     * @param {RankingDeleteArgs} args - Arguments to delete one Ranking.
     * @example
     * // Delete one Ranking
     * const Ranking = await prisma.ranking.delete({
     *   where: {
     *     // ... filter to delete one Ranking
     *   }
     * })
     * 
     */
    delete<T extends RankingDeleteArgs>(args: SelectSubset<T, RankingDeleteArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ranking.
     * @param {RankingUpdateArgs} args - Arguments to update one Ranking.
     * @example
     * // Update one Ranking
     * const ranking = await prisma.ranking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RankingUpdateArgs>(args: SelectSubset<T, RankingUpdateArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rankings.
     * @param {RankingDeleteManyArgs} args - Arguments to filter Rankings to delete.
     * @example
     * // Delete a few Rankings
     * const { count } = await prisma.ranking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RankingDeleteManyArgs>(args?: SelectSubset<T, RankingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rankings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rankings
     * const ranking = await prisma.ranking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RankingUpdateManyArgs>(args: SelectSubset<T, RankingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rankings and returns the data updated in the database.
     * @param {RankingUpdateManyAndReturnArgs} args - Arguments to update many Rankings.
     * @example
     * // Update many Rankings
     * const ranking = await prisma.ranking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rankings and only return the `userId`
     * const rankingWithUserIdOnly = await prisma.ranking.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RankingUpdateManyAndReturnArgs>(args: SelectSubset<T, RankingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ranking.
     * @param {RankingUpsertArgs} args - Arguments to update or create a Ranking.
     * @example
     * // Update or create a Ranking
     * const ranking = await prisma.ranking.upsert({
     *   create: {
     *     // ... data to create a Ranking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ranking we want to update
     *   }
     * })
     */
    upsert<T extends RankingUpsertArgs>(args: SelectSubset<T, RankingUpsertArgs<ExtArgs>>): Prisma__RankingClient<$Result.GetResult<Prisma.$RankingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rankings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingCountArgs} args - Arguments to filter Rankings to count.
     * @example
     * // Count the number of Rankings
     * const count = await prisma.ranking.count({
     *   where: {
     *     // ... the filter for the Rankings we want to count
     *   }
     * })
    **/
    count<T extends RankingCountArgs>(
      args?: Subset<T, RankingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RankingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ranking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RankingAggregateArgs>(args: Subset<T, RankingAggregateArgs>): Prisma.PrismaPromise<GetRankingAggregateType<T>>

    /**
     * Group by Ranking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingGroupByArgs} args - Group by arguments.
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
      T extends RankingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RankingGroupByArgs['orderBy'] }
        : { orderBy?: RankingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RankingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRankingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ranking model
   */
  readonly fields: RankingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ranking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RankingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    anime<T extends AnimesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimesDefaultArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ranking model
   */
  interface RankingFieldRefs {
    readonly userId: FieldRef<"Ranking", 'Int'>
    readonly animeId: FieldRef<"Ranking", 'Int'>
    readonly score: FieldRef<"Ranking", 'Int'>
    readonly followedAt: FieldRef<"Ranking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ranking findUnique
   */
  export type RankingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter, which Ranking to fetch.
     */
    where: RankingWhereUniqueInput
  }

  /**
   * Ranking findUniqueOrThrow
   */
  export type RankingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter, which Ranking to fetch.
     */
    where: RankingWhereUniqueInput
  }

  /**
   * Ranking findFirst
   */
  export type RankingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter, which Ranking to fetch.
     */
    where?: RankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rankings to fetch.
     */
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rankings.
     */
    cursor?: RankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rankings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rankings.
     */
    distinct?: RankingScalarFieldEnum | RankingScalarFieldEnum[]
  }

  /**
   * Ranking findFirstOrThrow
   */
  export type RankingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter, which Ranking to fetch.
     */
    where?: RankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rankings to fetch.
     */
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rankings.
     */
    cursor?: RankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rankings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rankings.
     */
    distinct?: RankingScalarFieldEnum | RankingScalarFieldEnum[]
  }

  /**
   * Ranking findMany
   */
  export type RankingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter, which Rankings to fetch.
     */
    where?: RankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rankings to fetch.
     */
    orderBy?: RankingOrderByWithRelationInput | RankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rankings.
     */
    cursor?: RankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rankings.
     */
    skip?: number
    distinct?: RankingScalarFieldEnum | RankingScalarFieldEnum[]
  }

  /**
   * Ranking create
   */
  export type RankingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * The data needed to create a Ranking.
     */
    data: XOR<RankingCreateInput, RankingUncheckedCreateInput>
  }

  /**
   * Ranking createMany
   */
  export type RankingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rankings.
     */
    data: RankingCreateManyInput | RankingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ranking createManyAndReturn
   */
  export type RankingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * The data used to create many Rankings.
     */
    data: RankingCreateManyInput | RankingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ranking update
   */
  export type RankingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * The data needed to update a Ranking.
     */
    data: XOR<RankingUpdateInput, RankingUncheckedUpdateInput>
    /**
     * Choose, which Ranking to update.
     */
    where: RankingWhereUniqueInput
  }

  /**
   * Ranking updateMany
   */
  export type RankingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rankings.
     */
    data: XOR<RankingUpdateManyMutationInput, RankingUncheckedUpdateManyInput>
    /**
     * Filter which Rankings to update
     */
    where?: RankingWhereInput
    /**
     * Limit how many Rankings to update.
     */
    limit?: number
  }

  /**
   * Ranking updateManyAndReturn
   */
  export type RankingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * The data used to update Rankings.
     */
    data: XOR<RankingUpdateManyMutationInput, RankingUncheckedUpdateManyInput>
    /**
     * Filter which Rankings to update
     */
    where?: RankingWhereInput
    /**
     * Limit how many Rankings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ranking upsert
   */
  export type RankingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * The filter to search for the Ranking to update in case it exists.
     */
    where: RankingWhereUniqueInput
    /**
     * In case the Ranking found by the `where` argument doesn't exist, create a new Ranking with this data.
     */
    create: XOR<RankingCreateInput, RankingUncheckedCreateInput>
    /**
     * In case the Ranking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RankingUpdateInput, RankingUncheckedUpdateInput>
  }

  /**
   * Ranking delete
   */
  export type RankingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
    /**
     * Filter which Ranking to delete.
     */
    where: RankingWhereUniqueInput
  }

  /**
   * Ranking deleteMany
   */
  export type RankingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rankings to delete
     */
    where?: RankingWhereInput
    /**
     * Limit how many Rankings to delete.
     */
    limit?: number
  }

  /**
   * Ranking without action
   */
  export type RankingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ranking
     */
    select?: RankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ranking
     */
    omit?: RankingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    country: 'country',
    enable: 'enable',
    about: 'about'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AnimesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nameUrl: 'nameUrl',
    review: 'review',
    gender: 'gender',
    studio: 'studio',
    date: 'date',
    img: 'img',
    enable: 'enable'
  };

  export type AnimesScalarFieldEnum = (typeof AnimesScalarFieldEnum)[keyof typeof AnimesScalarFieldEnum]


  export const RankingScalarFieldEnum: {
    userId: 'userId',
    animeId: 'animeId',
    score: 'score',
    followedAt: 'followedAt'
  };

  export type RankingScalarFieldEnum = (typeof RankingScalarFieldEnum)[keyof typeof RankingScalarFieldEnum]


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    avatar?: StringFilter<"Users"> | string
    country?: StringFilter<"Users"> | string
    enable?: BoolFilter<"Users"> | boolean
    about?: StringFilter<"Users"> | string
    following?: AnimesListRelationFilter
    ranked?: RankingListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    country?: SortOrder
    enable?: SortOrder
    about?: SortOrder
    following?: AnimesOrderByRelationAggregateInput
    ranked?: RankingOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    avatar?: StringFilter<"Users"> | string
    country?: StringFilter<"Users"> | string
    enable?: BoolFilter<"Users"> | boolean
    about?: StringFilter<"Users"> | string
    following?: AnimesListRelationFilter
    ranked?: RankingListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    country?: SortOrder
    enable?: SortOrder
    about?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    avatar?: StringWithAggregatesFilter<"Users"> | string
    country?: StringWithAggregatesFilter<"Users"> | string
    enable?: BoolWithAggregatesFilter<"Users"> | boolean
    about?: StringWithAggregatesFilter<"Users"> | string
  }

  export type AnimesWhereInput = {
    AND?: AnimesWhereInput | AnimesWhereInput[]
    OR?: AnimesWhereInput[]
    NOT?: AnimesWhereInput | AnimesWhereInput[]
    id?: IntFilter<"Animes"> | number
    name?: StringFilter<"Animes"> | string
    nameUrl?: StringFilter<"Animes"> | string
    review?: StringFilter<"Animes"> | string
    gender?: StringFilter<"Animes"> | string
    studio?: StringFilter<"Animes"> | string
    date?: StringFilter<"Animes"> | string
    img?: StringFilter<"Animes"> | string
    enable?: BoolFilter<"Animes"> | boolean
    followers?: UsersListRelationFilter
    ranking?: RankingListRelationFilter
  }

  export type AnimesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nameUrl?: SortOrder
    review?: SortOrder
    gender?: SortOrder
    studio?: SortOrder
    date?: SortOrder
    img?: SortOrder
    enable?: SortOrder
    followers?: UsersOrderByRelationAggregateInput
    ranking?: RankingOrderByRelationAggregateInput
  }

  export type AnimesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nameUrl?: string
    AND?: AnimesWhereInput | AnimesWhereInput[]
    OR?: AnimesWhereInput[]
    NOT?: AnimesWhereInput | AnimesWhereInput[]
    name?: StringFilter<"Animes"> | string
    review?: StringFilter<"Animes"> | string
    gender?: StringFilter<"Animes"> | string
    studio?: StringFilter<"Animes"> | string
    date?: StringFilter<"Animes"> | string
    img?: StringFilter<"Animes"> | string
    enable?: BoolFilter<"Animes"> | boolean
    followers?: UsersListRelationFilter
    ranking?: RankingListRelationFilter
  }, "id" | "nameUrl">

  export type AnimesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nameUrl?: SortOrder
    review?: SortOrder
    gender?: SortOrder
    studio?: SortOrder
    date?: SortOrder
    img?: SortOrder
    enable?: SortOrder
    _count?: AnimesCountOrderByAggregateInput
    _avg?: AnimesAvgOrderByAggregateInput
    _max?: AnimesMaxOrderByAggregateInput
    _min?: AnimesMinOrderByAggregateInput
    _sum?: AnimesSumOrderByAggregateInput
  }

  export type AnimesScalarWhereWithAggregatesInput = {
    AND?: AnimesScalarWhereWithAggregatesInput | AnimesScalarWhereWithAggregatesInput[]
    OR?: AnimesScalarWhereWithAggregatesInput[]
    NOT?: AnimesScalarWhereWithAggregatesInput | AnimesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Animes"> | number
    name?: StringWithAggregatesFilter<"Animes"> | string
    nameUrl?: StringWithAggregatesFilter<"Animes"> | string
    review?: StringWithAggregatesFilter<"Animes"> | string
    gender?: StringWithAggregatesFilter<"Animes"> | string
    studio?: StringWithAggregatesFilter<"Animes"> | string
    date?: StringWithAggregatesFilter<"Animes"> | string
    img?: StringWithAggregatesFilter<"Animes"> | string
    enable?: BoolWithAggregatesFilter<"Animes"> | boolean
  }

  export type RankingWhereInput = {
    AND?: RankingWhereInput | RankingWhereInput[]
    OR?: RankingWhereInput[]
    NOT?: RankingWhereInput | RankingWhereInput[]
    userId?: IntFilter<"Ranking"> | number
    animeId?: IntFilter<"Ranking"> | number
    score?: IntFilter<"Ranking"> | number
    followedAt?: DateTimeFilter<"Ranking"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    anime?: XOR<AnimesScalarRelationFilter, AnimesWhereInput>
  }

  export type RankingOrderByWithRelationInput = {
    userId?: SortOrder
    animeId?: SortOrder
    score?: SortOrder
    followedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    anime?: AnimesOrderByWithRelationInput
  }

  export type RankingWhereUniqueInput = Prisma.AtLeast<{
    userId_animeId?: RankingUserIdAnimeIdCompoundUniqueInput
    AND?: RankingWhereInput | RankingWhereInput[]
    OR?: RankingWhereInput[]
    NOT?: RankingWhereInput | RankingWhereInput[]
    userId?: IntFilter<"Ranking"> | number
    animeId?: IntFilter<"Ranking"> | number
    score?: IntFilter<"Ranking"> | number
    followedAt?: DateTimeFilter<"Ranking"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    anime?: XOR<AnimesScalarRelationFilter, AnimesWhereInput>
  }, "userId_animeId">

  export type RankingOrderByWithAggregationInput = {
    userId?: SortOrder
    animeId?: SortOrder
    score?: SortOrder
    followedAt?: SortOrder
    _count?: RankingCountOrderByAggregateInput
    _avg?: RankingAvgOrderByAggregateInput
    _max?: RankingMaxOrderByAggregateInput
    _min?: RankingMinOrderByAggregateInput
    _sum?: RankingSumOrderByAggregateInput
  }

  export type RankingScalarWhereWithAggregatesInput = {
    AND?: RankingScalarWhereWithAggregatesInput | RankingScalarWhereWithAggregatesInput[]
    OR?: RankingScalarWhereWithAggregatesInput[]
    NOT?: RankingScalarWhereWithAggregatesInput | RankingScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Ranking"> | number
    animeId?: IntWithAggregatesFilter<"Ranking"> | number
    score?: IntWithAggregatesFilter<"Ranking"> | number
    followedAt?: DateTimeWithAggregatesFilter<"Ranking"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    avatar: string
    country: string
    enable: boolean
    about?: string
    following?: AnimesCreateNestedManyWithoutFollowersInput
    ranked?: RankingCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar: string
    country: string
    enable: boolean
    about?: string
    following?: AnimesUncheckedCreateNestedManyWithoutFollowersInput
    ranked?: RankingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    about?: StringFieldUpdateOperationsInput | string
    following?: AnimesUpdateManyWithoutFollowersNestedInput
    ranked?: RankingUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    about?: StringFieldUpdateOperationsInput | string
    following?: AnimesUncheckedUpdateManyWithoutFollowersNestedInput
    ranked?: RankingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar: string
    country: string
    enable: boolean
    about?: string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    about?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    about?: StringFieldUpdateOperationsInput | string
  }

  export type AnimesCreateInput = {
    name: string
    nameUrl: string
    review: string
    gender: string
    studio: string
    date: string
    img: string
    enable?: boolean
    followers?: UsersCreateNestedManyWithoutFollowingInput
    ranking?: RankingCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateInput = {
    id?: number
    name: string
    nameUrl: string
    review: string
    gender: string
    studio: string
    date: string
    img: string
    enable?: boolean
    followers?: UsersUncheckedCreateNestedManyWithoutFollowingInput
    ranking?: RankingUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrl?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    followers?: UsersUpdateManyWithoutFollowingNestedInput
    ranking?: RankingUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrl?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    followers?: UsersUncheckedUpdateManyWithoutFollowingNestedInput
    ranking?: RankingUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesCreateManyInput = {
    id?: number
    name: string
    nameUrl: string
    review: string
    gender: string
    studio: string
    date: string
    img: string
    enable?: boolean
  }

  export type AnimesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrl?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnimesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrl?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RankingCreateInput = {
    score: number
    followedAt?: Date | string
    user: UsersCreateNestedOneWithoutRankedInput
    anime: AnimesCreateNestedOneWithoutRankingInput
  }

  export type RankingUncheckedCreateInput = {
    userId: number
    animeId: number
    score: number
    followedAt?: Date | string
  }

  export type RankingUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutRankedNestedInput
    anime?: AnimesUpdateOneRequiredWithoutRankingNestedInput
  }

  export type RankingUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    animeId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingCreateManyInput = {
    userId: number
    animeId: number
    score: number
    followedAt?: Date | string
  }

  export type RankingUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    animeId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AnimesListRelationFilter = {
    every?: AnimesWhereInput
    some?: AnimesWhereInput
    none?: AnimesWhereInput
  }

  export type RankingListRelationFilter = {
    every?: RankingWhereInput
    some?: RankingWhereInput
    none?: RankingWhereInput
  }

  export type AnimesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RankingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    country?: SortOrder
    enable?: SortOrder
    about?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    country?: SortOrder
    enable?: SortOrder
    about?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    country?: SortOrder
    enable?: SortOrder
    about?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameUrl?: SortOrder
    review?: SortOrder
    gender?: SortOrder
    studio?: SortOrder
    date?: SortOrder
    img?: SortOrder
    enable?: SortOrder
  }

  export type AnimesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnimesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameUrl?: SortOrder
    review?: SortOrder
    gender?: SortOrder
    studio?: SortOrder
    date?: SortOrder
    img?: SortOrder
    enable?: SortOrder
  }

  export type AnimesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nameUrl?: SortOrder
    review?: SortOrder
    gender?: SortOrder
    studio?: SortOrder
    date?: SortOrder
    img?: SortOrder
    enable?: SortOrder
  }

  export type AnimesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type AnimesScalarRelationFilter = {
    is?: AnimesWhereInput
    isNot?: AnimesWhereInput
  }

  export type RankingUserIdAnimeIdCompoundUniqueInput = {
    userId: number
    animeId: number
  }

  export type RankingCountOrderByAggregateInput = {
    userId?: SortOrder
    animeId?: SortOrder
    score?: SortOrder
    followedAt?: SortOrder
  }

  export type RankingAvgOrderByAggregateInput = {
    userId?: SortOrder
    animeId?: SortOrder
    score?: SortOrder
  }

  export type RankingMaxOrderByAggregateInput = {
    userId?: SortOrder
    animeId?: SortOrder
    score?: SortOrder
    followedAt?: SortOrder
  }

  export type RankingMinOrderByAggregateInput = {
    userId?: SortOrder
    animeId?: SortOrder
    score?: SortOrder
    followedAt?: SortOrder
  }

  export type RankingSumOrderByAggregateInput = {
    userId?: SortOrder
    animeId?: SortOrder
    score?: SortOrder
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

  export type AnimesCreateNestedManyWithoutFollowersInput = {
    create?: XOR<AnimesCreateWithoutFollowersInput, AnimesUncheckedCreateWithoutFollowersInput> | AnimesCreateWithoutFollowersInput[] | AnimesUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutFollowersInput | AnimesCreateOrConnectWithoutFollowersInput[]
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
  }

  export type RankingCreateNestedManyWithoutUserInput = {
    create?: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput> | RankingCreateWithoutUserInput[] | RankingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutUserInput | RankingCreateOrConnectWithoutUserInput[]
    createMany?: RankingCreateManyUserInputEnvelope
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
  }

  export type AnimesUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<AnimesCreateWithoutFollowersInput, AnimesUncheckedCreateWithoutFollowersInput> | AnimesCreateWithoutFollowersInput[] | AnimesUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutFollowersInput | AnimesCreateOrConnectWithoutFollowersInput[]
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
  }

  export type RankingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput> | RankingCreateWithoutUserInput[] | RankingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutUserInput | RankingCreateOrConnectWithoutUserInput[]
    createMany?: RankingCreateManyUserInputEnvelope
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AnimesUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<AnimesCreateWithoutFollowersInput, AnimesUncheckedCreateWithoutFollowersInput> | AnimesCreateWithoutFollowersInput[] | AnimesUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutFollowersInput | AnimesCreateOrConnectWithoutFollowersInput[]
    upsert?: AnimesUpsertWithWhereUniqueWithoutFollowersInput | AnimesUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    disconnect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    delete?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    update?: AnimesUpdateWithWhereUniqueWithoutFollowersInput | AnimesUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: AnimesUpdateManyWithWhereWithoutFollowersInput | AnimesUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: AnimesScalarWhereInput | AnimesScalarWhereInput[]
  }

  export type RankingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput> | RankingCreateWithoutUserInput[] | RankingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutUserInput | RankingCreateOrConnectWithoutUserInput[]
    upsert?: RankingUpsertWithWhereUniqueWithoutUserInput | RankingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RankingCreateManyUserInputEnvelope
    set?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    disconnect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    delete?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    update?: RankingUpdateWithWhereUniqueWithoutUserInput | RankingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RankingUpdateManyWithWhereWithoutUserInput | RankingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RankingScalarWhereInput | RankingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnimesUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<AnimesCreateWithoutFollowersInput, AnimesUncheckedCreateWithoutFollowersInput> | AnimesCreateWithoutFollowersInput[] | AnimesUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: AnimesCreateOrConnectWithoutFollowersInput | AnimesCreateOrConnectWithoutFollowersInput[]
    upsert?: AnimesUpsertWithWhereUniqueWithoutFollowersInput | AnimesUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    disconnect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    delete?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    connect?: AnimesWhereUniqueInput | AnimesWhereUniqueInput[]
    update?: AnimesUpdateWithWhereUniqueWithoutFollowersInput | AnimesUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: AnimesUpdateManyWithWhereWithoutFollowersInput | AnimesUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: AnimesScalarWhereInput | AnimesScalarWhereInput[]
  }

  export type RankingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput> | RankingCreateWithoutUserInput[] | RankingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutUserInput | RankingCreateOrConnectWithoutUserInput[]
    upsert?: RankingUpsertWithWhereUniqueWithoutUserInput | RankingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RankingCreateManyUserInputEnvelope
    set?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    disconnect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    delete?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    update?: RankingUpdateWithWhereUniqueWithoutUserInput | RankingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RankingUpdateManyWithWhereWithoutUserInput | RankingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RankingScalarWhereInput | RankingScalarWhereInput[]
  }

  export type UsersCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput> | UsersCreateWithoutFollowingInput[] | UsersUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFollowingInput | UsersCreateOrConnectWithoutFollowingInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type RankingCreateNestedManyWithoutAnimeInput = {
    create?: XOR<RankingCreateWithoutAnimeInput, RankingUncheckedCreateWithoutAnimeInput> | RankingCreateWithoutAnimeInput[] | RankingUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutAnimeInput | RankingCreateOrConnectWithoutAnimeInput[]
    createMany?: RankingCreateManyAnimeInputEnvelope
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput> | UsersCreateWithoutFollowingInput[] | UsersUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFollowingInput | UsersCreateOrConnectWithoutFollowingInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type RankingUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<RankingCreateWithoutAnimeInput, RankingUncheckedCreateWithoutAnimeInput> | RankingCreateWithoutAnimeInput[] | RankingUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutAnimeInput | RankingCreateOrConnectWithoutAnimeInput[]
    createMany?: RankingCreateManyAnimeInputEnvelope
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput> | UsersCreateWithoutFollowingInput[] | UsersUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFollowingInput | UsersCreateOrConnectWithoutFollowingInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutFollowingInput | UsersUpsertWithWhereUniqueWithoutFollowingInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutFollowingInput | UsersUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutFollowingInput | UsersUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type RankingUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<RankingCreateWithoutAnimeInput, RankingUncheckedCreateWithoutAnimeInput> | RankingCreateWithoutAnimeInput[] | RankingUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutAnimeInput | RankingCreateOrConnectWithoutAnimeInput[]
    upsert?: RankingUpsertWithWhereUniqueWithoutAnimeInput | RankingUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: RankingCreateManyAnimeInputEnvelope
    set?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    disconnect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    delete?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    update?: RankingUpdateWithWhereUniqueWithoutAnimeInput | RankingUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: RankingUpdateManyWithWhereWithoutAnimeInput | RankingUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: RankingScalarWhereInput | RankingScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput> | UsersCreateWithoutFollowingInput[] | UsersUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFollowingInput | UsersCreateOrConnectWithoutFollowingInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutFollowingInput | UsersUpsertWithWhereUniqueWithoutFollowingInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutFollowingInput | UsersUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutFollowingInput | UsersUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type RankingUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<RankingCreateWithoutAnimeInput, RankingUncheckedCreateWithoutAnimeInput> | RankingCreateWithoutAnimeInput[] | RankingUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: RankingCreateOrConnectWithoutAnimeInput | RankingCreateOrConnectWithoutAnimeInput[]
    upsert?: RankingUpsertWithWhereUniqueWithoutAnimeInput | RankingUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: RankingCreateManyAnimeInputEnvelope
    set?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    disconnect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    delete?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    connect?: RankingWhereUniqueInput | RankingWhereUniqueInput[]
    update?: RankingUpdateWithWhereUniqueWithoutAnimeInput | RankingUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: RankingUpdateManyWithWhereWithoutAnimeInput | RankingUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: RankingScalarWhereInput | RankingScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutRankedInput = {
    create?: XOR<UsersCreateWithoutRankedInput, UsersUncheckedCreateWithoutRankedInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRankedInput
    connect?: UsersWhereUniqueInput
  }

  export type AnimesCreateNestedOneWithoutRankingInput = {
    create?: XOR<AnimesCreateWithoutRankingInput, AnimesUncheckedCreateWithoutRankingInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutRankingInput
    connect?: AnimesWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutRankedNestedInput = {
    create?: XOR<UsersCreateWithoutRankedInput, UsersUncheckedCreateWithoutRankedInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRankedInput
    upsert?: UsersUpsertWithoutRankedInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRankedInput, UsersUpdateWithoutRankedInput>, UsersUncheckedUpdateWithoutRankedInput>
  }

  export type AnimesUpdateOneRequiredWithoutRankingNestedInput = {
    create?: XOR<AnimesCreateWithoutRankingInput, AnimesUncheckedCreateWithoutRankingInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutRankingInput
    upsert?: AnimesUpsertWithoutRankingInput
    connect?: AnimesWhereUniqueInput
    update?: XOR<XOR<AnimesUpdateToOneWithWhereWithoutRankingInput, AnimesUpdateWithoutRankingInput>, AnimesUncheckedUpdateWithoutRankingInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AnimesCreateWithoutFollowersInput = {
    name: string
    nameUrl: string
    review: string
    gender: string
    studio: string
    date: string
    img: string
    enable?: boolean
    ranking?: RankingCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateWithoutFollowersInput = {
    id?: number
    name: string
    nameUrl: string
    review: string
    gender: string
    studio: string
    date: string
    img: string
    enable?: boolean
    ranking?: RankingUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesCreateOrConnectWithoutFollowersInput = {
    where: AnimesWhereUniqueInput
    create: XOR<AnimesCreateWithoutFollowersInput, AnimesUncheckedCreateWithoutFollowersInput>
  }

  export type RankingCreateWithoutUserInput = {
    score: number
    followedAt?: Date | string
    anime: AnimesCreateNestedOneWithoutRankingInput
  }

  export type RankingUncheckedCreateWithoutUserInput = {
    animeId: number
    score: number
    followedAt?: Date | string
  }

  export type RankingCreateOrConnectWithoutUserInput = {
    where: RankingWhereUniqueInput
    create: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput>
  }

  export type RankingCreateManyUserInputEnvelope = {
    data: RankingCreateManyUserInput | RankingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnimesUpsertWithWhereUniqueWithoutFollowersInput = {
    where: AnimesWhereUniqueInput
    update: XOR<AnimesUpdateWithoutFollowersInput, AnimesUncheckedUpdateWithoutFollowersInput>
    create: XOR<AnimesCreateWithoutFollowersInput, AnimesUncheckedCreateWithoutFollowersInput>
  }

  export type AnimesUpdateWithWhereUniqueWithoutFollowersInput = {
    where: AnimesWhereUniqueInput
    data: XOR<AnimesUpdateWithoutFollowersInput, AnimesUncheckedUpdateWithoutFollowersInput>
  }

  export type AnimesUpdateManyWithWhereWithoutFollowersInput = {
    where: AnimesScalarWhereInput
    data: XOR<AnimesUpdateManyMutationInput, AnimesUncheckedUpdateManyWithoutFollowersInput>
  }

  export type AnimesScalarWhereInput = {
    AND?: AnimesScalarWhereInput | AnimesScalarWhereInput[]
    OR?: AnimesScalarWhereInput[]
    NOT?: AnimesScalarWhereInput | AnimesScalarWhereInput[]
    id?: IntFilter<"Animes"> | number
    name?: StringFilter<"Animes"> | string
    nameUrl?: StringFilter<"Animes"> | string
    review?: StringFilter<"Animes"> | string
    gender?: StringFilter<"Animes"> | string
    studio?: StringFilter<"Animes"> | string
    date?: StringFilter<"Animes"> | string
    img?: StringFilter<"Animes"> | string
    enable?: BoolFilter<"Animes"> | boolean
  }

  export type RankingUpsertWithWhereUniqueWithoutUserInput = {
    where: RankingWhereUniqueInput
    update: XOR<RankingUpdateWithoutUserInput, RankingUncheckedUpdateWithoutUserInput>
    create: XOR<RankingCreateWithoutUserInput, RankingUncheckedCreateWithoutUserInput>
  }

  export type RankingUpdateWithWhereUniqueWithoutUserInput = {
    where: RankingWhereUniqueInput
    data: XOR<RankingUpdateWithoutUserInput, RankingUncheckedUpdateWithoutUserInput>
  }

  export type RankingUpdateManyWithWhereWithoutUserInput = {
    where: RankingScalarWhereInput
    data: XOR<RankingUpdateManyMutationInput, RankingUncheckedUpdateManyWithoutUserInput>
  }

  export type RankingScalarWhereInput = {
    AND?: RankingScalarWhereInput | RankingScalarWhereInput[]
    OR?: RankingScalarWhereInput[]
    NOT?: RankingScalarWhereInput | RankingScalarWhereInput[]
    userId?: IntFilter<"Ranking"> | number
    animeId?: IntFilter<"Ranking"> | number
    score?: IntFilter<"Ranking"> | number
    followedAt?: DateTimeFilter<"Ranking"> | Date | string
  }

  export type UsersCreateWithoutFollowingInput = {
    name: string
    email: string
    password: string
    avatar: string
    country: string
    enable: boolean
    about?: string
    ranked?: RankingCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutFollowingInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar: string
    country: string
    enable: boolean
    about?: string
    ranked?: RankingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutFollowingInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
  }

  export type RankingCreateWithoutAnimeInput = {
    score: number
    followedAt?: Date | string
    user: UsersCreateNestedOneWithoutRankedInput
  }

  export type RankingUncheckedCreateWithoutAnimeInput = {
    userId: number
    score: number
    followedAt?: Date | string
  }

  export type RankingCreateOrConnectWithoutAnimeInput = {
    where: RankingWhereUniqueInput
    create: XOR<RankingCreateWithoutAnimeInput, RankingUncheckedCreateWithoutAnimeInput>
  }

  export type RankingCreateManyAnimeInputEnvelope = {
    data: RankingCreateManyAnimeInput | RankingCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutFollowingInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutFollowingInput, UsersUncheckedUpdateWithoutFollowingInput>
    create: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutFollowingInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutFollowingInput, UsersUncheckedUpdateWithoutFollowingInput>
  }

  export type UsersUpdateManyWithWhereWithoutFollowingInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutFollowingInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    avatar?: StringFilter<"Users"> | string
    country?: StringFilter<"Users"> | string
    enable?: BoolFilter<"Users"> | boolean
    about?: StringFilter<"Users"> | string
  }

  export type RankingUpsertWithWhereUniqueWithoutAnimeInput = {
    where: RankingWhereUniqueInput
    update: XOR<RankingUpdateWithoutAnimeInput, RankingUncheckedUpdateWithoutAnimeInput>
    create: XOR<RankingCreateWithoutAnimeInput, RankingUncheckedCreateWithoutAnimeInput>
  }

  export type RankingUpdateWithWhereUniqueWithoutAnimeInput = {
    where: RankingWhereUniqueInput
    data: XOR<RankingUpdateWithoutAnimeInput, RankingUncheckedUpdateWithoutAnimeInput>
  }

  export type RankingUpdateManyWithWhereWithoutAnimeInput = {
    where: RankingScalarWhereInput
    data: XOR<RankingUpdateManyMutationInput, RankingUncheckedUpdateManyWithoutAnimeInput>
  }

  export type UsersCreateWithoutRankedInput = {
    name: string
    email: string
    password: string
    avatar: string
    country: string
    enable: boolean
    about?: string
    following?: AnimesCreateNestedManyWithoutFollowersInput
  }

  export type UsersUncheckedCreateWithoutRankedInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar: string
    country: string
    enable: boolean
    about?: string
    following?: AnimesUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type UsersCreateOrConnectWithoutRankedInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRankedInput, UsersUncheckedCreateWithoutRankedInput>
  }

  export type AnimesCreateWithoutRankingInput = {
    name: string
    nameUrl: string
    review: string
    gender: string
    studio: string
    date: string
    img: string
    enable?: boolean
    followers?: UsersCreateNestedManyWithoutFollowingInput
  }

  export type AnimesUncheckedCreateWithoutRankingInput = {
    id?: number
    name: string
    nameUrl: string
    review: string
    gender: string
    studio: string
    date: string
    img: string
    enable?: boolean
    followers?: UsersUncheckedCreateNestedManyWithoutFollowingInput
  }

  export type AnimesCreateOrConnectWithoutRankingInput = {
    where: AnimesWhereUniqueInput
    create: XOR<AnimesCreateWithoutRankingInput, AnimesUncheckedCreateWithoutRankingInput>
  }

  export type UsersUpsertWithoutRankedInput = {
    update: XOR<UsersUpdateWithoutRankedInput, UsersUncheckedUpdateWithoutRankedInput>
    create: XOR<UsersCreateWithoutRankedInput, UsersUncheckedCreateWithoutRankedInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRankedInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRankedInput, UsersUncheckedUpdateWithoutRankedInput>
  }

  export type UsersUpdateWithoutRankedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    about?: StringFieldUpdateOperationsInput | string
    following?: AnimesUpdateManyWithoutFollowersNestedInput
  }

  export type UsersUncheckedUpdateWithoutRankedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    about?: StringFieldUpdateOperationsInput | string
    following?: AnimesUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type AnimesUpsertWithoutRankingInput = {
    update: XOR<AnimesUpdateWithoutRankingInput, AnimesUncheckedUpdateWithoutRankingInput>
    create: XOR<AnimesCreateWithoutRankingInput, AnimesUncheckedCreateWithoutRankingInput>
    where?: AnimesWhereInput
  }

  export type AnimesUpdateToOneWithWhereWithoutRankingInput = {
    where?: AnimesWhereInput
    data: XOR<AnimesUpdateWithoutRankingInput, AnimesUncheckedUpdateWithoutRankingInput>
  }

  export type AnimesUpdateWithoutRankingInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrl?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    followers?: UsersUpdateManyWithoutFollowingNestedInput
  }

  export type AnimesUncheckedUpdateWithoutRankingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrl?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    followers?: UsersUncheckedUpdateManyWithoutFollowingNestedInput
  }

  export type RankingCreateManyUserInput = {
    animeId: number
    score: number
    followedAt?: Date | string
  }

  export type AnimesUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    nameUrl?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    ranking?: RankingUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrl?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    ranking?: RankingUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateManyWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameUrl?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RankingUpdateWithoutUserInput = {
    score?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anime?: AnimesUpdateOneRequiredWithoutRankingNestedInput
  }

  export type RankingUncheckedUpdateWithoutUserInput = {
    animeId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingUncheckedUpdateManyWithoutUserInput = {
    animeId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingCreateManyAnimeInput = {
    userId: number
    score: number
    followedAt?: Date | string
  }

  export type UsersUpdateWithoutFollowingInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    about?: StringFieldUpdateOperationsInput | string
    ranked?: RankingUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    about?: StringFieldUpdateOperationsInput | string
    ranked?: RankingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    enable?: BoolFieldUpdateOperationsInput | boolean
    about?: StringFieldUpdateOperationsInput | string
  }

  export type RankingUpdateWithoutAnimeInput = {
    score?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutRankedNestedInput
  }

  export type RankingUncheckedUpdateWithoutAnimeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingUncheckedUpdateManyWithoutAnimeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    followedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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