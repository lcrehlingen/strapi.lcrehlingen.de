import type { Struct, Schema } from '@strapi/strapi';

export interface ListTrainingTimeRange extends Struct.ComponentSchema {
  collectionName: 'components_list_training_time_ranges';
  info: {
    icon: 'calendar-alt';
    description: '';
    displayName: 'TrainingTimeRange';
  };
  attributes: {
    day: Schema.Attribute.Enumeration<
      [
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
        'Sonntag',
      ]
    > &
      Schema.Attribute.Required;
    start: Schema.Attribute.Time & Schema.Attribute.Required;
    end: Schema.Attribute.Time & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'list.training-time-range': ListTrainingTimeRange;
    }
  }
}
