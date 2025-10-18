# day4
(shadcn 제공 소스로 인스톨한것: button.jsx, card. jsx, index.css


제공소스로 수정작업: Home.jsx


작업한것: GlobalLayout.jsx, App.jsx)


shadcn/ui -> 사이트에서 제공하는 소스 첨가 작업


사이트에서
lnstallation(인스톨 명령어), ui소스 제공 


Home.jsx 컴퍼넌트 만들고 제공소스 넣어 수정


생성된 components/ui에
button.jsx (pnpm dlx shadcn@latest add button 인스톨시 생성됨)


card. jsx (pnpm dlx shadcn@latest add card 인스톨시 생성됨)


index.css (pnpm dlx shadcn@latest init 인스톨시 생성됨)



App.jsx에서 path경로만 남기고 


자식이 렌더링될 <Outlet /> 부모가 있는 레이아웃 GlobalLayout.jsx에 링크를 분리해준다


App.jsx에서 children []의 배열이 GlobalLayout.jsx의 <Outlet />에 렌더링된다
