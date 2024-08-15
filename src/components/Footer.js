import React from 'react';

const EducationForm = () => {
  const fields = [
    { label: 'College/Institute' },
    { label: 'Specialization' },
    { label: 'Start Year' },
  ];

  const rows = [1, 2, 3]; // Adjust the number of rows as needed

  return (
    <div className="container">
      {rows.map((_, index) => (
        <div key={index} className="d-flex justify-content-between my-2">
          {fields.map((field, idx) => (
            <input
              key={idx}
              type="text"
              className="form-control mx-2"
              placeholder={field.label}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default EducationForm;
