import { widgetType } from './widget-type';

test('widgetType not to be null', () => {
  expect(widgetType.name).toBe('Widget');
});