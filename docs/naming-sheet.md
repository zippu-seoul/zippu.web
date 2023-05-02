# Naming cheatsheet

- [사용 언어](#language)
- [기본 네이밍 룰](#naming-convention)
  - [상수](#Constants)
- [S-I-D](#s-i-d)
- [축약어를 피하자](#avoid-contractions)
- [컨텍스트 중복을 피하자](#avoid-context-duplication)
- [함수명 네이밍](#naming-functions)
  - [A/HC/LC pattern](#ahclc-pattern)
    - [동사](#actions)
    - [접두사](#prefixes)
- [단수와 복수](#singular-and-plurals)

---

## language

변수명이나, 함수명을 지을때는 왠만하면 영어로 짓는다.

```js
/* Bad */
const primerNombre = 'Gustavo';
const amigos = ['Kate', 'John'];

/* Good */
const firstName = 'Gustavo';
const friends = ['Kate', 'John'];
```

> 특별한 경우(영어로 표현했을때 의미가 명확히 추론이 안되는경우)엔 한글도 허용 하여야 할 것으로 생각이 든다.

## Naming convention

기본적인 변수명 , 함수명은 **camelCase** 네이밍룰을 따른다.

```js
/* Bad */
const page_count = 5;
const active = true;
const ShouldUpdate = true;

/* Good */
const pageCount = 5;
const isActive = true;
const shouldUpdate = true;
```


> backend로부터 받은 데이터인지(original), front 자체 데이터인지를 구분할 수 있다면 좋더라구요
> 회식때 잠깐 얘기했었는데, 현수님께서도 데이터 내려줄때 snake-case로 변환하여 내려 줄 수 있다고하셔서 
> 이부분은 논의할 필요가 있어보입니다.

## Constants

상수의 경우, **UPPER_SNAKE_CASE** 룰을 따른다.

```js
/* Bad */
const hostUrl = 'https://naver.com';
const apiUrl = 'https://api.naver.com';

/* Good */
const HOST_URL = 'https://naver.com';
const API_URL = 'https://api.naver.com';
```

## S-I-D

이름은 항상 _short_(짧다), _intuitive_(직관적) _descriptive_(서술적) 이여야 한다! :

- **Short**. 입력하는 데 시간이 오래 걸리지 않는것이 기억하기에도 좋습니다;
- **Intuitive**. 일반적인 언어에 가깝게 자연스럽게 읽혀야 합니다;
- **Descriptive**. A name must reflect what it does/possesses in the most efficient way.

```js
/* Bad */
const a = 5; // "a" could mean anything
const isPaginatable = a > 10; // Paginatable 은 부자연스럽다.
const shouldPaginatize = a > 10; // 없는 동사를 만드는것은 부자연스럽다

/* Good */
const postCount = 5;
const hasPagination = postCount > 10;
const shouldPaginate = postCount > 10; // alternatively
```

## Avoid contractions

가능한 축약어를 사용하지 사용하지 않도록 해야합니다. 코드의 가독성을 이 떨어집니다.
```js
/* Bad */
function getUsrNme() {
  // ...
}

/* Good */
function getUserName() {
  // ...
}
```
> but 이름이 너무 긴 경우에 합의하에 축약어를 쓸 수도있지않을까?
> ex)BottomSheetModal -> BS

## Avoid context duplication

정의된 컨텍스트와 중복 되는것을 피하여야 합니다.

```js
class UserService {
  /* Bad */
  getUserSettings(event) {
    // ...
  }

  /* Good */
  getSettings(event) {
    // ...
  }
}
```

## Reflect the expected result (예상 결과 반영)

예상 결과를 반영하여 지어야합니다.

```jsx
/* Bad */
const isEnabled = itemCount > 3;
if (!isEnabled) {
  // ...
}

/* Good */
const isDisabled = itemCount <= 3;
if (isDisabled) {
  // ...
}
```

---

# Naming functions

## A/HC/LC Pattern
```
prefix? + action (A) + high context (HC) + low context? (LC)
```

| Name                   | Prefix   | Action (A) | High context (HC) | Low context (LC) |
| ---------------------- | -------- | ---------- | ----------------- | ---------------- |
| `getUser`              |          | `get`      | `User`            |                  |
| `getUserMessages`      |          | `get`      | `User`            | `Messages`       |
| `shouldDisplayMessage` | `should` | `Display`  | `Message`         |                  |
| `isPaymentEnabled`     | `is`     | `Enabled`  | `Payment`         |                  |

---

## Actions

동사 부분입니다. 함수가 어떤일을 하는지 파악 할 수 있는 동사를 사용 하여야 합니다.

### `get`

데이터를 즉시 가져올 수 있는 경우(비동기x).

```js
function getUserFullName() {
  return this.firstName + ' ' + this.lastName;
}
```

### `set`

값 `A`에서 값 `B`로 변수를 선언적 방식으로 설정합니다.

```js
let fruits = 0;

function setFruits(nextFruits) {
  fruits = nextFruits;
}

setFruits(5);
console.log(fruits); // 5
```

### `reset`

변수를 초기상태로 재할당 하는경우에 사용합니다. 비슷한 용어로 clear,initialize등이 있는데, reset사용을 권장합니다.

```js
const initialFruits = 5;
let fruits = initialFruits;
setFruits(10);
console.log(fruits); // 10

function resetFruits() {
  fruits = initialFruits;
}

resetFruits();
console.log(fruits); // 5
```

### `fetch , create , update , delete`

불확실한 시간이 걸리는 데이터 요청시 사용합니다.

```js
fetchPromotions = async () => {
  return this.callApi.get({
    path: '/admin/promotions',
  });
};

createPromotion = async (params: ApiParameters<'/promotions', 'post'>) => {
  return this.callApi.post({
    path: '/promotions',
    variables: params,
  });
};

deletePromotion = async (
  params: ApiParameters<'/promotions/{promotion_id}', 'delete'>,
) => {
  return this.callApi.delete({
    path: '/promotions/{promotion_id}',
    variables: params,
  });
};

updatePromotion = async (
  params: ApiParameters<'/promotions/{promotion_id}', 'patch'>,
) => {
  return this.callApi.patch({
    path: '/promotions/{promotion_id}',
    variables: params,
  });
};
```

### `remove`

Removes something _from_ somewhere.

예를 들어, 검색 페이지에 선택한 필터 모음이 있는 경우 모음에서 필터 중 하나를 제거하는 것은 `deleteFilter` **가 아니라 `removeFilter`가 되어야합니다.:

```js
function removeFilter(filters, filterName) {
  return filters.filter((name) => name !== filterName);
}

const selectedFilters = ['price', 'availability', 'size'];
removeFilter(selectedFilters, 'price');
```


### `compose`

기존 데이터에서 새 데이터를 만들때 사용합니다. 보통 return type이 string 인경우에 사용합니다.

```js
function composePageUrl({
  pageName,
  pageId,
}: {
  pageName: string,
  pageId: number,
}) {
  return pageName.toLowerCase() + '-' + pageId;
}
```

### `translate`

기존 데이터에서 새 데이터를 만들때 사용합니다. 보통 object의 Type이 변형될때 사용합니다.

```js
function tranlateAdminUser({
  users,
  userType,
}:
  {
    users: {
      name:string,
      role:'admin'|'normal'
      }[];
    userType: 'admin'|'normal';
  }) {
  return users
  .filter(user=>user.role==='admin')
  .map(user=>({
    name:user.name,
    label:'어드민유저',
  }))
}
```
> 사실 리팩터링책에서 잠깐 본 내용인데 실제로 저희가 유용하게 사용할 수 있을지 의문입니다.
---

## Prefixes

접두사는 변수의 의미를 강조합니다.(함수형태로 작성필요시 즉시 실행함수 사용) 

### `is`/`has`/`min`/`max`

Describes a characteristic or state of the current context (usually `boolean`).

```js
const color = 'blue';
const isBlue = color === 'blue'; // characteristic
const isPresent = true; // state
const isLogined = (()=>{
  if(user.token) return true;
  if(cookie.user.token) return true;
  return false;
})()

if (isBlue && isPresent) {
  console.log('Blue is present!');
}
```
## 단수 , 복수

```js
/* Bad */
const friends = 'Bob';
const friend = ['Bob', 'Tony', 'Tanya'];

/* Good */
const friend = 'Bob';
const friends = ['Bob', 'Tony', 'Tanya'];
```
