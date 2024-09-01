import type {
  ListItem,
  StructureResolver,
} from "sanity/structure";

import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const deskStructure: StructureResolver = (
  S,
  context,
) => {
  return S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems(),
      orderableDocumentListDeskItem({
        // @ts-expect-error type compat
        context,
        // @ts-expect-error type compat
        S,
        title: "Trustees Order",
        type: "trustee",
      }) as ListItem,
      orderableDocumentListDeskItem({
        // @ts-expect-error type compat
        context,
        // @ts-expect-error type compat
        S,
        title: "Navigation Order",
        type: "navigation",
      }) as ListItem,
    ]);
};
