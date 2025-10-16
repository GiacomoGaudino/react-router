export default function Page404NotFound() {

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
                backgroundColor: "#f8f9fa",
                color: "#333",
                fontFamily: "Arial, sans-serif"
            }}>
                <h1 style={{ fontSize: "8rem", margin: 0 }}>404</h1>
                <h2 style={{ margin: "1rem 0" }}>Oops! Pagina non trovata</h2>
                <p style={{ marginBottom: "2rem" }}>
                    La pagina che stai cercando non esiste o è stata rimossa.
                </p>
            </div>
        </>
    )
}