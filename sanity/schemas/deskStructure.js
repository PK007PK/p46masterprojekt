import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Config')
        .child(S.document().schemaType('siteConfig').documentId('siteConfig')),
      ...S.documentTypeListItems().filter(
        (item) => !['siteConfig'].includes(item.getId())
      ),
    ]);
