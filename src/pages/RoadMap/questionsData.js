export const questionData = [
  {
    pageId: 1, // Must include pageId. Can either be a string or integer
    pageTitle: 'Welcome Home', // Optional title
    pageDescription: [
      "Welcome home! We're excited but not naïve. We know that leaving prison and re-entry into the community, workplace, and your family is not easy. It can be very frustrating and overwhelming at times. The truth is that a lot of people aren’t successful and end up back in prison.",
      "However, we’re hopeful that things can, and will, change for the better. In fact, If we weren’t absolutely convinced of that, we wouldn’t even bother with this tool. We want to help be part of that change by laying  out a helpful process for you to follow, and connect with some wonderful people and resources."],
    fields: [ // At least one field per page is required. Multiple fields are supported.
      {
        label: 'Select your county',
        name: 'county',
        fieldType: 'dropdown',
        variant: 'outlined', // TextField props can be supplied. Supported props: variant, fullWidth, autoFocus, and type.
        options: [
          'Mecklenburg'
        ]
      },
      {
        label: 'Select your state',
        name: 'state',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'North Carolina'
        ]
      }
    ]
  },

  {
    pageId: 2, // Must include pageId. Can either be a string or integer
    pageTitle: 'Basic Information', // Optional title
    pageDescription: ["We hope this is a useful tool for you to prepare your own personal roadmap back home. We're going to ask a few questions to match you up with the resources that you need and help create a roadmap to your success. These questions are not all inclusive and we will ask more in specific sections, as needed."], // Optional subtitle
      fields:[ // At least one field per page is required. Multiple fields are supported.
        {
          label: 'Please enter your first name',
          name: 'name',
          fieldType: 'text',
          variant: 'outlined', // TextField props can be supplied. Supported props: variant, fullWidth, autoFocus, and type.
          fullWidth: true
        },
        {
          label: 'What is your date of birth?',
          name: 'dob',
          fieldType: 'text',
          variant: 'outlined',
          fullWidth: true
        },
        {
          label: 'What is your gender?',
          name: 'gender',
          fieldType: 'dropdown',
          variant: 'outlined',
          options: [
            'Male',
            'Female',
            'Other',
          ]
        }
      ]
  },

  {
    pageId: 3,
    pageTitle: 'Getting Organized',
    pageDescription: ["We know this sounds like the worst step, but we know this will help you save time and frustration down the road. We all just want to jump into job and housing searches but we urge you to trust us on this one. Being organized now will help when doors start opening for you. You can do this and we’re here to help.",
    "Most of us need help getting organized. Many returning residents tell us that it’s hard to ask for help. Please don’t be afraid or embarrassed to ask for any help you may need. It’s impossible to list every resource in Charlotte, but we’ve tried to include some of the more well-known and well-established places. So, you may need to do a little research on your own:",
    "- Ask your parole officer and/or a community re-entry specialist if s/he knows of specific places to get help.",
    "- Call 3-1-1, and be connected to a database of health and social service resources available to you through the Department of Child and Family Services.",
    "- If you go to a community organization, ask if they know about other places in the community where you might find help. Many offer specialized services but work in partnership with each other."],
    fields: [
      {
        label: 'Do you have a government-issued ID?',
        name: 'id',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No',
        ]
      },
      {
        label: 'Do you have a Social Security Card?',
        name: 'ssncard',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No'
        ]
      },
      {
        label: 'Do you have your Birth Certificate?',
        name: 'birthcert',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No'
        ]
      },
      {
        label: 'Do you have your healthcare cards?',
        name: 'healthcard',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No'
        ]
      },
      {
        label: 'Do you have a permanent mailing address?',
        name: 'mailingadd',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No'
        ]
      },
      {
        label: 'Do you have a phone number to use as a contact number?',
        name: 'phonenumber',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No'
        ]
      },
      {
        label: 'Do you have a personal email address?',
        name: 'emailadd',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No'
        ]
      },
      {
        label: 'Do you have everything you need for the DMV?',
        name: 'dmvready',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No'
        ]
      }
    ]
  },


  {
    pageId: 4,
    pageTitle: 'Getting an ID',
    pageDescription: ["As you probably know, having an government-issued ID is vital to life and accessing resources. To minimize necessary time at the DMV let’s make sure you know what you need and how to get an ID or license.",
    "Qualifying for an ID requires you to to be able to prove two things: Proof of Identity and Proof of Residence. Let’s look at each of them.",
    "You can prove your Identity with any of the following documents:",
    "- A certified birth certificate may serve as proof of date of birth and full name.",
    "- Prison release photo ID or official release document may serve as proof of identity.",
    "- Original or photo copy of the Social Security Card or W2 of a work release initiative may serve as proof of SSN.",
    "- A printout of the Department of Correction Official Release Document may serve as proof of the residence address if the offender has been released from prison.",
    "- Expired NC driver license or identification card (if applicable) may serve as proof of full name, DOB and residence address.",
    "Official documents such as forms of identification, Social Security cards, Driver’s License, Prison I.D, Birth Certificates, official release document should be included in the Transition Document Envelope (TDE). The envelope (TDE) and documents enclosed will be crucial in the transition and reentry process."],
    fields: [
      {
        label: 'Which is superior?',
        name: 'color',
        fieldType: 'checkbox',
        options: [
          'Unicorn',
          'Pegasus',
        ]
      }
    ]
  },



  {
    pageId: 5,
    pageTitle: 'Getting Employment',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: 'Do you have a diploma or GED certificate?',
        name: 'diplomaOrGED',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No'
        ]
      },
      {
        label: 'Do you have any training certificates?',
        name: 'trainingcerts',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No'
        ]
      },
      {
        label: 'Do you have any college degrees?',
        name: 'degrees',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No'
        ]
      },
      {
        label: 'If so, what kind?',
        name: 'degreetype',
        fieldType: 'text',
        variant: 'outlined',
        fullWidth: true
      },
      {
        label: 'Are you looking for any of the following types of jobs',
        name: 'jobtypes',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Office',
          'Labor',
          'Food Services',
        ]
      }
    ]
  },




  {
    pageId: 6,
    pageTitle: 'Getting Housing',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: 'Which is superior?',
        name: 'color',
        fieldType: 'checkbox',
        options: [
          'Unicorn',
          'Pegasus',
        ]
      }
    ]
  },
  {
    pageId: 7,
    pageTitle: 'Getting Transportation',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: 'Do you use Public Transportation as your primary transportation?',
        name: 'color',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Yes',
          'No',
        ]
      }
    ]
  },
  {
    pageId: 8,
    pageTitle: 'Getting Food Security',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: 'Which is superior?',
        name: 'color',
        fieldType: 'checkbox',
        options: [
          'Unicorn',
          'Pegasus',
        ]
      }
    ]
  },
  {
    pageId: 9,
    pageTitle: 'Getting Medical Healthcare',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: 'Do you have private insurance?',
        name: 'insurance',
        fieldType: 'radio',
        options: [
          'Yes',
          'No',
        ]
      },
      {
        label: 'Do you have medicaid?',
        name: 'medicaid',
        fieldType: 'radio',
        options: [
          'Yes',
          'No',
        ]
      },
      {
        label: 'Have you ever been diagnosed with a chronic illness?',
        name: 'chronicillness',
        fieldType: 'radio',
        options: [
          'Yes',
          'No',
        ]
      },
      {
        label: 'If so, what kind?',
        name: 'chronicillnesstype',
        fieldType: 'text',
        variant: 'outlined',
        fullWidth: true
      }
    ]
  },


  {
    pageId: 10,
    pageTitle: 'Getting Mental Healthcare',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: 'Which is superior?',
        name: 'color',
        fieldType: 'checkbox',
        options: [
          'Unicorn',
          'Pegasus',
        ]
      }
    ]
  },
  {
    pageId: 11,
    pageTitle: 'Getting Substance Abuse Treatment',
    pageDescription: ["INSERT INSPIRATIONAL INFO HERE",
    "Helpful Reminders:",
    "- The location of your treatment is vital to your success. It is much harder to stay with a program that is difficult to access or isn’t convenient.",
    "- If you are on papers, you’ll need to use an approved treatment provider. Check with your case worker to make sure your provider is approved."],
    fields: [
      {
        label: 'Which is superior?',
        name: 'color',
        fieldType: 'checkbox',
        options: [
          'Unicorn',
          'Pegasus',
        ]
      }
    ]
  },
  {
    pageId: 12,
    pageTitle: 'Getting Legal Help',
    pageDescription: ['One of the most frustrating experiences is to finally get out, start getting your life together, and then get arrested unexpectedly for an old case, warrants, detainers, traffic tickets and fines. Especially, when many of these legal issues can be resolved while you’re still in prison. Some situations may be more complicated and will have to be dealt with after you’re released but it is important to understand what you can take care of before your release. '],
    fields: [
      {
        label: 'Do you know of any unresolved legal issues?',
        name: 'color',
        fieldType: 'radio',
        options: [
          'Yes',
          'No',
        ]
      }
    ]
  },
  {
    pageId: 13,
    pageTitle: 'Starting a Business',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: 'Which is superior?',
        name: 'color',
        fieldType: 'checkbox',
        options: [
          'Unicorn',
          'Pegasus',
        ]
      }
    ]
  },
  {
    pageId: 14,
    pageTitle: 'Getting Financial Literacy',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: 'Which is superior?',
        name: 'color',
        fieldType: 'checkbox',
        options: [
          'Unicorn',
          'Pegasus',
        ]
      }
    ]
  },
  {
    pageId: 15,
    pageTitle: 'Getting Reunification',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: "Do you have family that you'd like help reunifying with?",
        name: 'color',
        fieldType: 'radio',
        options: [
          'Yes',
          'No',
        ]
      }
    ]
  },
  {
    pageId: 16,
    pageTitle: 'Getting Mentorship',
    pageDescription: ["We’ve heard over and over from returning residents that no one understands quite like someone who’s lived through it. We couldn’t agree more. Mentors with lived experience are so important on your path to a successful return to the community. Therefore, we encourage you to look past your pride or cynicism (easier said than done, we know) and ask for and accept help."],
    fields: [
      {
        label: 'Would you like to be connected to a mentor?',
        name: 'color',
        fieldType: 'radio',
        options: [
          'Yes',
          'No',
        ]
      }
    ]
  },
  {
    pageId: 17,
    pageTitle: 'Getting an Expungement',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: 'Which is superior?',
        name: 'color',
        fieldType: 'checkbox',
        options: [
          'Unicorn',
          'Pegasus',
        ]
      }
    ]
  },
  {
    pageId: 18,
    pageTitle: 'Flex Your Advocacy',
    pageDescription: ['INSERT INSPIRATIONAL INFO HERE'],
    fields: [
      {
        label: 'Which is superior?',
        name: 'color',
        fieldType: 'checkbox',
        options: [
          'Unicorn',
          'Pegasus',
        ]
      }
    ]
  },

];
