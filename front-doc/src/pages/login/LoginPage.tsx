import { VisibilityOff, Visibility } from "@mui/icons-material"
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { useState } from "react"


export const LoginPage = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const loginSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
    }

    const handleShowPassChange = () => {
        setShowPassword(!showPassword)
    }

    return(        
        <div className="login">
           
            <form 
                style={{
                    width: '100',
                    
                }}
                onSubmit={loginSubmit}
                            
            >
                 <h1 
                    style={{
                        textAlign: 'center'
                    }}
                 >
                    Вход</h1>
                <TextField
                    
                    error={error}
                    fullWidth
                    label="Login"
                    required
                    onChange={(e) => setLogin(e.target.value)}
                    margin="normal"
                    
                />
                <TextField
                    
                    error={error}
                    fullWidth 
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton onClick={handleShowPassChange}>
                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                            </InputAdornment>
                        )
                    }}
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    className={error ? "error" : ""}
                    
                >                
                </TextField>
                <Button 
                    fullWidth
                    variant="contained"
                    type="submit"
                    style={{
                        height: '50px'
                    }}
                >
                    Войти
                </Button>
            </form>
        </div>
    )
} 