import { Breadcrumbs, Item } from "react-aria-components";

const _Breadcrumbs = (props: any) => {
  return <Breadcrumbs {...props} />;
};

const _BreadcrumbItem = (props: any) => {
  return <Item {...props} />;
};

export { _Breadcrumbs as Breadcrumbs, _BreadcrumbItem as BreadcrumbItem };
