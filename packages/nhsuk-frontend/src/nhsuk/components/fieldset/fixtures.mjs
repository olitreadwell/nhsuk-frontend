import { outdent } from 'outdent'

import { components } from '#lib'

import { examples as inputExamples } from '../input/fixtures.mjs'

/**
 * Nunjucks macro option variants
 *
 * @satisfies {MacroExample[]}
 */
export const variants = [
  {
    // Regular variant
  },
  {
    description: 'reverse',
    context: {
      variant: 'reverse'
    },
    options: {
      layout: 'background-blue'
    }
  }
]

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'l',
        isPageHeading: true
      }
    },
    callBlock: getCallBlock(),
    variants: variants.map(customVariant()),
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'legend': {
    context: {
      legend: {
        text: 'What is your address?',
        size: 'l',
        isPageHeading: true
      }
    },
    variants: [
      {
        description: 'with size S',
        context: {
          legend: {
            size: 's'
          }
        }
      },
      {
        description: 'with size M',
        context: {
          legend: {
            size: 'm'
          }
        }
      },
      {
        description: 'with size L',
        context: {
          legend: {
            size: 'l'
          }
        }
      },
      {
        description: 'with size XL',
        context: {
          legend: {
            size: 'xl'
          }
        }
      }
    ]
  },
  'with legend size class': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l',
        isPageHeading: true
      }
    }
  },
  'with legend size class overriding size param': {
    context: {
      legend: {
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--l',
        size: 's',
        isPageHeading: true
      }
    }
  },
  'without page heading': {
    context: {
      legend: {
        text: 'What is your address?'
      }
    },
    variants
  }
}

/**
 * Get example call block by variant
 *
 * @param {{ variant?: unknown }} [options]
 */
function getCallBlock(options = {}) {
  const input1 = structuredClone(inputExamples['example address line 1'])
  const input2 = structuredClone(inputExamples['example address line 2'])
  const input3 = structuredClone(inputExamples['example address town or city'])
  const input4 = structuredClone(inputExamples['example address postcode'])

  if (options.variant === 'reverse') {
    input1.context ??= {}
    input1.context.variant = 'reverse'

    input2.context ??= {}
    input2.context.variant = 'reverse'

    input3.context ??= {}
    input3.context.variant = 'reverse'

    input4.context ??= {}
    input4.context.variant = 'reverse'
  }

  return outdent`
    ${components.render('input', input1)}
    ${components.render('input', input2)}
    ${components.render('input', input3)}
    ${components.render('input', input4)}
  `
}

/**
 * Replace call block for each variant
 *
 * @returns {(variant: MacroExample) => MacroExample}
 */
function customVariant() {
  return (example) => {
    example = structuredClone(example)
    example.context ??= {}

    const { variant } = example.context
    example.callBlock = getCallBlock({ variant })

    return example
  }
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
