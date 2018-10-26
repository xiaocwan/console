import React from 'react';
import pfBrand from 'patternfly/dist/img/logo-alt.svg';
import github from 'patternfly/dist/img/github-logo.svg';
import facebook from 'patternfly/dist/img/facebook-logo.svg';
import linkedin from 'patternfly/dist/img/linkedin-logo.svg';
import instagram from 'patternfly/dist/img/instagram-logo.png';
import twitter from 'patternfly/dist/img/twitter-logo.svg';
import skype from 'patternfly/dist/img/skype-logo.svg';

export const mockTileItems = [
  {
    category: 'Social Media',
    id: 'social-media',
    items: [
      {
        id: 'Facebook',
        title: 'Facebook',
        image: facebook,
        vendor: <span>provided by Facebook, Inc.</span>,
        description:
          'Facebook is an American online social media and social networking service company based in Menlo Park, California.',
        featured: true,
        certified: true,
        approved: false
      },
      {
        title: 'LinkedIn',
        image: linkedin,
        vendor: 'provided by LinkedIn',
        description:
          'A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'Instagram',
        image: instagram,
        vendor: 'provided by Facebook, Inc',
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: false,
        certified: true,
        approved: true
      },
      {
        title: 'Twitter',
        image: twitter,
        vendor: 'provided by Twitter, Inc.',
        description:
          'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        id: 'Skype',
        title: 'Skype',
        image: skype,
        vendor: 'provided by Skype',
        description:
          'Stay in touch! Free online calls, messaging, affordable international calling to mobiles or landlines ' +
          'and Skype for Business for effective collaboration.',
        featured: true,
        certified: true,
        approved: true
      }
    ]
  },
  {
    category: 'Miscellaneous',
    id: 'misc',
    items: [
      {
        id: 'PatternFly-long-description',
        title: 'PatternFly-React',
        image: pfBrand,
        vendor: (
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'This is a very long description that should be truncated after 112 characters. ' +
          '112 is the default but can be overridden if need be. You can also provide a custom truncation function ' +
          'to truncate the description how you see fit. It will be passed the description and max length.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      }
    ]
  },
  {
    category: 'More Stuff',
    id: 'more',
    items: [
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      }
    ]
  }
];


export const mockFilterExampleFields = [
  {
    id: 'name',
    title: 'Name',
    placeholder: 'Filter by Name',
    filterType: 'text'
  },
  {
    id: 'address',
    title: 'Address',
    placeholder: 'Filter by Address',
    filterType: 'text'
  },
  {
    id: 'birthMonth',
    title: 'Birth Month',
    placeholder: 'Filter by Birth Month',
    filterType: 'select',
    filterValues: [
      { title: 'January', id: 'jan' },
      { title: 'February', id: 'feb' },
      { title: 'March', id: 'mar' },
      { title: 'April', id: 'apr' },
      { title: 'May', id: 'may' },
      { title: 'June', id: 'jun' },
      { title: 'July', id: 'jul' },
      { title: 'August', id: 'aug' },
      { title: 'September', id: 'sep' },
      { title: 'October', id: 'oct' },
      { title: 'November', id: 'nov' },
      { title: 'December', id: 'dec' }
    ]
  },
  {
    id: 'car',
    title: 'Car',
    placeholder: 'Filter by Car Make',
    filterType: 'complex-select',
    filterValues: [{ title: 'Subaru', id: 'subie' }, 'Toyota'],
    filterCategoriesPlaceholder: 'Filter by Car Model',
    filterCategories: [
      {
        id: 'subie',
        title: 'Subaru',
        filterValues: [
          {
            title: 'Outback',
            id: 'out'
          },
          'Crosstrek',
          'Impreza'
        ]
      },
      {
        id: 'toyota',
        title: 'Toyota',
        filterValues: [
          {
            title: 'Prius',
            id: 'pri'
          },
          'Corolla',
          'Echo'
        ]
      }
    ]
  }
];

export const mockSortFields = [
  {
    id: 'name',
    title: 'Name',
    isNumeric: false
  },
  {
    id: 'address',
    title: 'Address',
    isNumeric: false
  },
  {
    id: 'birthMonth',
    title: 'Birth Month',
    isNumeric: true
  },
  {
    id: 'car',
    title: 'Car',
    isNumeric: false
  }
];

export const mockFilterSidebarCategories = [
  {
    title: "Operator Certified Level",
    category: 'certifiedLevel',
    id: 'certifiedLevel',
    items: [
      {
        title: "Certified",
        type: "certifiedCertified1"
      },
      {
        title: "Primed",
        type: "certifiedPrimed"
      },
      {
        title: "Community",
        type: "certifiedCommunity"
      }
    ]
  },
  {
    title: "Provider",
    category: 'provider',
    id: 'provider',
    items: [
      {
        title: "Red Hat, Inc",
        count: 3,
        type: "providerRedHat"
      },
      {
        title: "Couchbase",
        count: 7,
        type: "providerCouchbase"
      },
      {
        title: "Crunchy Data",
        count: 9,
        type: "providerCrunchyData"
      },
      {
        title: "Dynatrace",
        count: 12,
        type: "providerDynatrace"
      },
      {
        title: "F5 Networks",
        count: 8,
        type: "providerF5Networks"
      }
    ]
  },
  {
    title: "Type",
    category: 'type',
    id: 'type',
    items: [
      {
        title: "Kubernetes Apps",
        count: 23,
        type: "typeKubernetesApps"
      },
      {
        title: "Source-to-Image",
        count:11,
        type:"typeSourceToImage"
      },
      {
        title: "Container Images",
        count: 5,
        type: "typeContainerImages"
      },
      {
        title: "Off-Cluster Services",
        count: 3,
        type: "typeOffClusterServices"
      }
    ]
  },
  {
    title: "Upgrade",
    category: 'upgrade',
    id: 'upgrade',
    items: [
      {
        title: "Auto",
        count: 6,
        type: "upgradeAuto"
      },
      {
        title: "Manual",
        count: 5,
        type:"upgradeManual"
      }
    ]
  },
  {
    title: "Health Index",
    category: 'healthIndex',
    id: 'healthIndex',
    items: [
      {
        title: "A",
        count: 2,
        type: "healthA"
      },
      {
        title: "B",
        count: 12,
        type: "healthB"
      },
      {
        title: "C",
        count: 8,
        type: "healthC"
      },
      {
        title: "D",
        count: 5,
        type: "healthD"
      },
      {
        title: "E",
        count: 3,
        type: "healthE"
      },
      {
        title: "F",
        count: 3,
        type: "healthF"
      }
    ]
  }
];

export const mockVerticalTabsMarketplace = [
  {
    id: "all",
    title: "All Categories"
  },
  {
    id: "fea",
    title: "Featured Services"
  },
  {
    id: "dbs",
    title: "Databases"
  },
  {
    id: "sto",
    title: "Storages"
  },
  {
    id: "net",
    title: "Networking"
  },
  {
    id: "mon",
    title: "Monitoring"
  },
  {
    id: "dev",
    title: "Developer Tools"
  },
  {
    id: "ide",
    title: "Identity"
  },
  {
    id: "sec",
    title: "Security"
  },
  {
    id: "cms",
    title: "Blogs & CMS"
  }
];

export const mockPropertyItems = [
  {
    label: 'Operator Version',
    value: '0.9.8 (latest)'
  },
  {
    label: 'Certified Level',
    value: 'Certified'
  },
  {
    label: 'Provider',
    value: 'Red Hat, Inc'
  },
  {
    label: 'Health Index',
    value: 'A'
  },
  {
    label: 'Repository',
    value: <a href="#">quay.ioo</a>
  },
  {
    label: 'Container Image',
    value: <a href="#">0.22.2</a>
  },
  {
    label: 'Created At',
    value: <span>Aug 23rd, 2018</span>
  },
  {
    label: 'Support',
      value: <a href="#">Red Hat</a>
  }
];
