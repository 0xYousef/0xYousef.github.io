export function openMail(email:string): void {
    window.location.href = `mailto:${email}`;
}
