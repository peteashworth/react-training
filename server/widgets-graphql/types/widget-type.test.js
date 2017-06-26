import { widgetType } from './widget-type';

test('widgetType name and description', () => {

  expect(widgetType.name).toBe('Widget');
  expect(widgetType.description).toBe('A widget object');
});