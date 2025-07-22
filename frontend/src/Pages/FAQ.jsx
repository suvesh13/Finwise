import React from 'react'

function FAQ() {
  return (
    <div>
      {/* FAQs */}
      <section id="faqs" className="py-24 px-4 max-w-5xl mx-auto">
        <h3 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-blue-700">Frequently Asked Questions</h3>
        <CustomAccordion>
          <CustomAccordionItem value="q1" title="Is FinWise a loan?">
            No, FinWise provides an advance on your already-earned wages. It's not a loan, so there's no interest and no debt incurred. You're simply accessing money you've already worked for.
          </CustomAccordionItem>

          <CustomAccordionItem value="q2" title="Who funds the advance?">
            The advance is funded by FinWise, the third-party EWA provider, not your employer directly. Your employer partners with us to facilitate this service seamlessly.
          </CustomAccordionItem>

          <CustomAccordionItem value="q3" title="Are there any charges or fees?">
            A small, transparent processing fee may apply per transaction. All costs are clearly shown upfront before you confirm any advance, ensuring no hidden surprises.
          </CustomAccordionItem>

          <CustomAccordionItem value="q4" title="How quickly can I get my funds?">
            Funds are typically transferred instantly to your linked bank account after your request is approved, allowing you immediate access to your earned wages.
          </CustomAccordionItem>
        </CustomAccordion>
      </section>
    </div>
  )
}

export default FAQ
