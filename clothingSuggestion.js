// input: outdoor temperature in Celsius
// output: clothing suggestion (string)

export function clothingSuggestion(temp) {
    let suggestion;

    if (temp < 0){
        suggestion = "wear a heavy winter coat";
    } else if (temp < 10) {
        suggestion = "wear a jacket";
    } else if (temp < 20) {
        suggestion = "wear a sweater";
    } else if (temp< 30) {
        suggestion = "T=shirt is fine";
    } else {
        suggestion = "wear shorts";
    }

    return suggestion;
}

if (import.meta.main) {
    console.log(`At -5: ${clothingSuggestion(-5)}`);
    console.log(`At 8: ${clothingSuggestion(8)}`);
    console.log(`At 15: ${clothingSuggestion(15)}`);
    console.log(`At 25: ${clothingSuggestion(25)}`);
}