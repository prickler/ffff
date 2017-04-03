var historyModule = (function() {
    var _xWins = 0,
        _oWins = 0,
        _ties = 0;

    var _xWon = function(){
        _xWins++;
    },

    _oWon = function(){
        _oWins++;
    },

    _wasDraw = function(){
        _ties++;
    },

    _getTimesXWon = function(){
        return _xWins;
    },

    _getTimesOWon = function(){
        return _oWins;
    },

    _getTimesWasDraw = function(){
        return _ties;
    }

    return {
        xWon: _xWon,
        oWon: _oWon,
        wasDraw: _wasDraw,
        getTimesXWon: _getTimesXWon,
        getTimesOWon: _getTimesOWon,
        getTimesWasDraw: _getTimesWasDraw
    }
})();