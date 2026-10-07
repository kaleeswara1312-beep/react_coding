function UserForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>

            {/* Text */}
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                />
            </div>

            {/* Email */}
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                />
            </div>

            {/* Number */}
            <div>
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                />
            </div>

            {/* Select */}
            <div>
                <select name="role">
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                </select>
            </div>

            {/* Radio */}
            <div>
                <p>Gender:</p>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                    />
                    Male
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                    />
                    Female
                </label>
            </div>

            {/* Checkbox */}
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="terms"
                        value="accepted"
                    />
                    Accept Terms
                </label>
            </div>

            <br />

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default UserForm;