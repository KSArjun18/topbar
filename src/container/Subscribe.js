import React from 'react'
acceptTerms: false,
acceptTerms: Yup.boolean()
.oneOf([true], 'You must accept the terms and conditions')
.required('You must accept the terms and conditions'), 
const Subscribe = () => {
  return (
    <div className='d-flex justify-content-center mt-3'>
                        <div className='form-check'>
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                className="form-check-input"
                                {...formik.getFieldProps('acceptTerms')}
                            />
                            <label htmlFor="acceptTerms" className="form-check-label">
                                I agree to the terms and conditions
                            </label>
                            {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
                                <div className="std_error_form">{formik.errors.acceptTerms}</div>
                            ) : null}
                        </div>
                    </div>
  )
}

export default Subscribe