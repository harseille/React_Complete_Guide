# NextJS

React의 프레임워크

대규모 양산형 React앱을 더 편리하게 구축할 수 있도록 많은 기능을 제공한다.

React의 '풀스택' 프레임워크

React: 사용자 인터페이스 구출을 위한 JS 라이브러리
프론트엔드 프로젝트에 추가할 수 있는 외부 패키지
-> client side js code

React는 대화형 사용자 인터페이스를 구축할 수 있게 도와준다.
vanilla JS로 만드는 것보다 쉽게 구출할 수 있게 해주는 라이브러리다.

컴포넌트, state, props를 이용해서 UI부분에 초첨을 맞춘다.

대규모 프로젝트가 될수록 라우팅 라이브러리, 인증 라이브러리들을 추가해야 한다.

## 프레임워크

- 라이브러리 보다 더 크고 기능이 많다.
- 코드를 작성하는 방법이나 파일을 구성하는 방법에 관한 명확한 규칙과 지침이 있다.

## NextJS 목표와 이유

React개발자가 더 편하게 작업할 수 하는것이 목표

개발자 스스로 React앱에 추가했어야할 여러 핵심 기능들을 추가해서 React를 강화시킨다.

규모가 큰 React앱을 실제로 구출할 때 흔히 발생하는 문제들을 해결 하기위한 추가 라이브러리를 추가할 필요가 없이 해결 가능

## NextJS 기능과 이점

### 주요기능

#### 1. SSR(server side rendering)

> Automatic page pre-rendering: Great for SEO and inital load
> Blending CSR, SSR: Fetch data on the server adn render finished pages.

React앱은 진입점 HTML을 기준으로 동적으로 렌더링한다.
React는 클라이언트 사이드 자바스크립트 라이브러리이기 때문에 모든 렌더링이 클라이언트 쪽에서 일어난다.

사용자 브라우저에 보이는 것은 서버에서 나온것이 아니다.

결과적으로 사용자가 페이지를 방문할 때 서버에서 클라이언트로 전송되는 실제 HTML은 상당히 비어 있다.

페이지가 서버에서 데이터를 받아와야하는 초기렌더링 시에는 데이터를 받아오는 요청을 진행하는 동안 페이지가 깜빡인다.
데이터 가져오기는 클라이언트 쪽에서 자바스크립트 코드가 실행될 때만 시작하기 때문이다.

> SEO 최적화가 CSR은 문제가 된다.

로그인을 해야만 보이는 관리자 데시보드 같은 경우는 SEO가 중요하지 않지만

검색 엔진으로 찾아야 하는 콘텐츠가 많이 있는 공개 페이지인 경우에는 검색 엔진 최적화가 중요하다.

CSR의 경우 검색 엔진 크롤러는 서버에서 들어온 비어있는 초기 HTML 페이지만 보고 있다.
이렇게 검색 엔진 크롤러가 이 콘텐츠를 가져오지 못하면 문제가 될 수 있다.

이럴 때 서버 사이드 렌더링이 필요하다.

서버에서 해당 페이지를 사전 렌더링한 상태에서 서버에 요청이 들어 왔을 때 해당 데이터를 서버에서 가져오면 완성된 페이지가 사용자와 검색 엔진 크롤러에 제공된다.

그러면 사용자는 깜빡이는 로딩 상태를 보지 않아도 되고 검색엔진도 해당 페이지 콘텐츠를 보게 될 것이다.

이렇게 서버 사이드 렌더링으로 문제를 해결할 수 있다.

React에서도 서버 사이드 렌더링을 추가할 수 있는 기능이 내장되어 있지만 구형하기 까다롭다.

NextJS에는 SSR이 내장 되어 있다. 즉 자동으로 페이지를 사전 렌더링 한다.
NextJS를 이용하면 초기 요청으로 읽어 들인 후에도 여전히 브라우저에서 기본 React 앱과 기본 싱글 페이지 애플리케이션을 실행 할 수 있다.
사용자가 후속 탐색을 할 수도 있는데 사용자가 페이지를 열어서 탐색할 때 이런 활동들을 브라우저에서 React가 관리하여 사용자에게 대화형 인터페이스를 제공할 수 있다.

> NextJS는 클라이언트와 서버 사이드 코드를 혼합한다는 뜻이다.

#### 2. file based routing

> Define pages and routes with files amd folders instead of code
> Less code, less work, highly understandable

기본 React는 라우터가 있지 않다.
라우팅이란 사용자에게 여러 페이지가 있는 것처럼 착각하게 하는 것이다.

탐색하고 다른 페이지를 로딩하는 것이 라우터의 역할이다.
보통은 react-router를 사용

서버에 요청을 보내는 기본 동작을 막고 대신 React를 사용하여 페이지에 다른 콘텐츠를 렌더링한다. -> 라우팅

일반적으로 React에서는 라우팅이 코드에서 설정된다.
보통 페이지 역할을 하는 컴포넌트를 별도의 폴더에 저장하고, 이렇게 코드에서 라우트 설정을 복제한다.
코드에서 페이지로 새 페이지르 설정 했다면, 해당 페이지 컴포넌트 폴더에도 새로운 페이지 컴포넌트가 존재해야한다.

NextJS는 이러한 코드 내 라우트 정의를 없핸다.
파일과 폴더를 이용해서 페이지와 라우트를 정의한다.

NextJS 앱에는 특수한 pages라는 폴더가 있다.
이 폴더를 구성하고 페이지가 지원하는 라우트와 경로를 정의하면된다.

#### 3. Full stack capabilities

> Easily add backend code to your Next/React apps
> Storing data, getting data, authentication etc. can be added to your React projects

React 프로젝트에 백엔드 코드를 쉽게 추가할 수 있따.
SSR을 위해서 독립형 백엔드 코드도 있어얗나다.
파일 시스템에서 작업한다거나 데이터베이스에 접근할 수 있어야 한다.

NextJS에서는 NodeJS 코드를 이용해서 React 프로젝트에 백엔드 API를 쉽게 추가할 수 있다.

즉, NextJS를 이용하면 Next / React 애플리케이션에 이러한 코드를 쉽게 추가할 수 있다.

독립적으로 REST API 프로젝트를 구축하지 않아도 된다.
하나의 Next 프로젝트에 클라이언트 쪽 코드와 React 사용자 인터페이스를 추가하고 백엔드 API 코드와 혼합하면 된다.

### 시작하기

NextJS는 public 폴더에 index.html파일이 없다.
NextJS가 사전 렌더링 기능을 내장하기 때문이다.

NextJS는 싱글 페이지 애플리케이션을 제공하여 서버에 요청이 오면 이 시클 페이지에 동적으로 사전 렌더링을 거텨 콘텐츠를 포함한 초기 페이지를 보여주게 된다.

### Page Pre-rendering

useEffect를 사용하여 server data를 fetch할 시 컴포넌트가 실행되고 useEffect가 실행된다.
SEO 최적화를 할 수 없다.

즉, 사전 렌더링한 페이지는 컴포넌트가 첫 번쨰 렌더링 사이클을 마친 이후의 스냅샷을 콘텐츠로 가직고 있다.
이때, 중요한 데이터는 손실된 상태이다.

만약 어떤 라우터가 있다면, 요청은 라우터로 전해지고 페이지로 이동할 것이다.
이때 사전 렌더링한 페이지를 반환하지만 데이터는 손실되어 있을 것이다.

이게 이론적으로 SEO에 좋을지 몰라도 항상 좋다고 보장할 수 없다.

HTML 페이지를 받은 후에 React가 받아 가서 페이지에 **hydrate**라고 부르는 작업을 수행한다.
즉, React가 페이지를 SPA로 만들고 제어하는 것이다.
React는 useEffect 함수를 실행할 것이고 데이터를 받아와서 페이지를 브라우저에서 업데이트 할 것이다.
그러므로 서버에서 사전 렌더링한 페이지가 아니다.

HTML 코드에 이미 데이터가 포함되어있는 페이지를 사전 렌더링 하려면 이 내장된 사전 렌더링 프로세스를 미세 조정하고 그에 맞는 설정을 해야한다.

#### NextJS에서 페이지 렌더링 방법을 제어하는 두 가지 사전 렌더링 방법

1. SSG(static site generation)
2. SSR

##### 1. static generation

애플리케이션을 빌드하거나 Next 프로젝트를 빌드하는 시점, 즉 프로덕션 용으로 빌드하는 시점에 사전 렌더링된다.

static generation에서는 기본적으로 요청이 서버에 도달 했을 때 서버에서 즉각적으로 페이지를 사전 렌더링하지 않는다.
개발자가 프로덕션용 사이트를 빌드할 때 사전 렌더링한다.
즉, 배포되고 나면 사전 렌더링한 페이지는 변경되지 않는다.

데이터를 업데이트했는데 사전 렌더링한 페이지를 변경해야 한다면 해당 빌드 프로세스를 다시 시작하고 다시 배포해야 한다.

페이지 컴포넌트에 데이터를 가져와서 추가해야 할 경우 pages 컴포넌트 파일 안에서 특수 함수 `getStaticProps`를 export로 내보내면 된다.

```js
export function getStaticProps() {}
```

NextJS는 사전 렌더링 프로세스 중에 이 함수를 실행한다.
따라서 컴포넌트 함수를 바로 호출하지 않고 반환된 JSX 스냅샷을 HTML 콘텐츠로 사용한다.

getStaticProps()는 비동기적으로 설정될 수 있어서 유용하다.
NextJS는 getStaticProps 반환한 promise가 solve될 때까지 기다린다.

getStaticProps 함수 안에서는 일반적으로 서버에서만 돌아가는 어떤 코드든지 전부 실행할 수 있습니다.
여기에서 파일 시스템에 접근할 수도 있고 데이터베이스에 안전하게 연결할 수도 있다.

이 함수에 작성하는 모든 코드는 클라이언트 측에 들어가지 않기 때문에 클라이언트 측에서 절대 실행되지 않는다.

이 코드는 빌드 프로세스 중에 실행되기 때문이디.

서버에서도, 특히 방문자인 클라이언트 측에서도 실행되지 않는다.
따라서 여기에 쓴 코드는 절대 방문자의 컴퓨터에 도달하지 못한다.

필요한 데이터를 얻는 작업을 모두 완료했으면 여기 getStaticProps에서 객체를 반환해야 한다.

일반적으로 여기에 props 프로퍼티를 설정한다. 이름은 반드시 props한다.

```js
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
```

##### revalidate()

SSG는 빌드 단계에서 페이지가 생성되므로 데이터의 최신 정보가 없을 수도 있다.

데이터가 자주 바뀌지 않는경우라면 빌드 할 때마다 다시 배포해도 상관이 없지만
데이터가 자주 바뀌는 경우는 문제를 해결해야한다.

이 문제를 해결하기위해 `revalidate` 프로퍼티를 사용해야한다.

```js
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
```

getStaticProps에서 반환된 객체에 이 프로퍼티를 추가하면 점진적 정적 생성이라는 기능을 사용할 수 있디

revalidate에는 숫자가 필요한데요 10이라고 한다면 이 숫자는 요청이 들어올 때 이 페이지를 다시 생성할 때까지 NextJS가 대기하는 시간을 초 단위로 표시한다

즉, revalidate에 어떤 숫자가 설정되어 있으면 페이지는 빌드 프로세스 중에 바로 생성되지 않는다

생성되긴 하겠지만 바로는 아니다, 적어도 이 페이지에 요청이 있다면 서버에서 몇 초 간격으로 생성된다

다시 말해서 revalidate 값이 10이라면 이 페이지에 요청이 들어오면 적어도 10초마다 서버에서 페이지를 다시 생성한다

데이터가 1시간마다 변하는 경우엔 3600으로 설정하고 항상 변하고 있다면 1초로 해야한다.

그러나 이 숫자를 무엇으로 설정하든 이 페이지는 배포 후 서버에서 때때로 다시 사전 생성한다, 그러니 일부 데이터가 변경되었다고 해서 매번 다시 빌드하고 배포할 필요는 없다.

##### getServerSideProps()

요청이 들어올 때마다 페이지를 다시 만들어야 할 때 -> 페이지를 동적으로 프리 제너레이트해야 한다.

```ts
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
```

단점: 요청이 들어올 때까지 페이지가 만들어지기 기다려야 한다.

그러므로 항상 바뀌는 데이터가 없다면
getStaticProps를 사용하는것이 낫다. HTML파일을 pre-generate하고 HTML 파일을 CDN에 저장하고 제공한다.
이것이 데이터를 서버에서 다시 만들고 패치하는 것보다 빠르다.

##### getStaticPaths()

getStaticProps는 페이지가 빌드 프로세스 중에 pre-generate된다.
dynamic page의 경우에는 모든 버전의 pre-generate가 필요하다는 뜻이다.

그러므로 pre-generate 하지 않은 페이지에 접속하면 404 에러를 보게 된다.

이 문제를 해결하기 위해 getStaticPaths()를 사용한다.

getStaticPaths()는 모든 동적 세그먼트 벨류 있는 객체를 return한다. ex)`[meetupId]`

fallback 키: NextJS에게 paths 배열의 모든 값이 지원되는 매개 변수를 저장 할지 유무를 선택
true: paths가 지원 되지 않는 값은 NextJS가 생성, 빈페이지를 즉시 반환하고 동적으로 생성된 콘텐츠를 풀다운
false: paths에게 지원 되는 값만 포함, 아니면 404에러
blocking: 페이지가 미리 생성될 때까지 사용자는 아무것도 볼 수 없고 완성된 페이지가 제공

```ts
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}
```

## deploy

검색엔진에 중요한 meta tag description을 설정 해야한다.

```ts
import Head from 'next/head';
```

```ts
const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="React 밋업: Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};
```
