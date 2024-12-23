// JavaScript | Movies Analyzer | Find Top Watchlisted Movies

// A group of friends shares a platform where they can watch and rate movies. Each user has a "watchlist" where they can add movies they are interested in watching. The system tracks each user's watchlist.

// You need to implement a function getTopWatchlistedMoviesByFriends(userId, users) which should return an array of up to four movie titles that are most frequently watchlisted by the friends of a given user. If there are ties, prioritize movies based on alphabetical order.

// Function Details:
// Input:
// userId - an integer, the ID of the user for whom you need to analyze the data.
// users - an array of user objects. Each user object contains:
// id - the unique ID of the user.
// friends - an array of integers representing the IDs of this user's friends.
// watchlist - an array of strings, each representing the title of a movie in the user's watchlist.
// Output:
// An array of up to four movie titles that are the most frequently watchlisted by the user's friends.
// Constraints:
// Only include movies from the watchlists of the user's friends.
// If there are fewer than four distinct movies in the friends' watchlists, return as many as possible.
// If multiple movies have the same frequency, return them in alphabetical order.
// Example Input:

const users = [
    {
        id: 1,
        friends: [2, 3],
        watchlist: ["The Matrix", "Inception", "Interstellar"]
    },
    {
        id: 2,
        friends: [1, 3],
        watchlist: ["The Matrix", "Inception", "The Dark Knight"]
    },
    {
        id: 3,
        friends: [1, 2],
        watchlist: ["Inception", "The Dark Knight", "Interstellar"]
    }
];


function getTopWatchlistedMoviesByFriends(userId, users) {
    // Find the user by ID
    const user = users.find(u => u.id === userId);
    if (!user) {
        return []; // If user not found, return empty array
    }

    // Collect the watchlists of the user's friends
    const friendsWatchlists = user.friends.flatMap(friendId => {
        const friend = users.find(u => u.id === friendId);
        return friend ? friend.watchlist : [];
    });

    console.log(friendsWatchlists)

    // Create a frequency map of movies
    const movieFrequency = friendsWatchlists.reduce((freq, movie) => {
        freq[movie] = (freq[movie] || 0) + 1;
        return freq;
    }, {});

    console.log(movieFrequency)

    // Sort movies by frequency (desc) and then alphabetically (asc)
    const sortedMovies = Object.keys(movieFrequency).sort((a, b) => {
        if (movieFrequency[b] !== movieFrequency[a]) {
            console.log(`${a} ${movieFrequency[b]} and  ${b} ${movieFrequency[a]}`)
            return movieFrequency[b] - movieFrequency[a]; // Sort by frequency
        }
        return a.localeCompare(b); // Sort alphabetically
    });
    console.log(sortedMovies)

    // Return the top 4 movies
    return sortedMovies.slice(0, 4);
}

const userId = 1;
console.log(getTopWatchlistedMoviesByFriends(userId, users));
