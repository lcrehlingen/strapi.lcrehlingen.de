import type { Schema, Attribute } from '@strapi/strapi';

export interface ListTrainingTimeRange extends Schema.Component {
  collectionName: 'components_list_training_time_ranges';
  info: {
    icon: 'calendar-alt';
    description: '';
    displayName: 'TrainingTimeRange';
  };
  attributes: {
    day: Attribute.Enumeration<
      [
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
        'Sonntag'
      ]
    > &
      Attribute.Required;
    start: Attribute.Time & Attribute.Required;
    end: Attribute.Time & Attribute.Required;
  };
}

export interface AuthorAuthors extends Schema.Component {
  collectionName: 'components_author_authors';
  info: {
    icon: 'pen';
    displayName: 'authors';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.training-time-range': ListTrainingTimeRange;
      'author.authors': AuthorAuthors;
    }
  }
}
