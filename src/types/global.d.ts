type UUID = `${string}-${string}-${string}-${string}-${string}`;

type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type Maybe<T> = Nullable<Optional<T>>;

type TID = {
   id: UUID | string | number;
};
