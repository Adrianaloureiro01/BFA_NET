export default function Input_Field({labelFor, labelText, inputName, inputPlaceholder}:{[key: string]: string}) {
    return (
			<div className="input_field">
            <label htmlFor={labelFor}>{labelText}</label>
				<input name={inputName} placeholder={inputPlaceholder} />
			</div>
		);
}